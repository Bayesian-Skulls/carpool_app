import json
from datetime import datetime, timedelta
import urllib.request as url
from flask import jsonify
from random import shuffle
from .extensions import db
from .models import User, Work, Calendar, Vehicle, Carpool


def get_events_by_time():
    start_time = timedelta(hours=-24)
    end_time = timedelta(hours=24)
    events = Calendar.query.filter((Calendar.arrival_datetime -
        datetime.now()) <= end_time).filter((Calendar.arrival_datetime -
        datetime.now()) >= start_time).all()
    events = [event.to_dict() for event in events]
    return events


def pair_event_and_driver():
    events = get_events_by_time()
    event_by_user = []
    for event in events:
        user = User.query.filter(User.id == event["user_id"]).first().to_dict()
        work = Work.query.filter(Work.id == event["work_id"]).first().to_dict()
        event_by_user.append({"user":user, "work":work, "event":event})
    return event_by_user


def pair_users():
    data = pair_event_and_driver()
    data = prep_data(data)
    pairs = []
    shuffle(data)
    for index, row in enumerate(data):
        current = []
        potential_pair = []
        for row2 in data[index:]:
            if (not row["matched"] and not row2["matched"]) and row != row2:
                home_dist = (((float(row["user"]["latitude"]) -
                               float(row2["user"]["latitude"]))**2 +
                              (float(row["user"]["longitude"]) -
                               float(row2["user"]["longitude"]))**2)**.5)
                work_dist = (((float(row["work"]["latitude"]) -
                               float(row2["work"]["latitude"]))**2 +
                              (float(row["work"]["longitude"]) -
                               float(row2["work"]["longitude"]))**2)**.5)
                current.append(home_dist + work_dist)
                potential_pair.append((row, row2))
        try:
            match = current.index(min(current))
        except ValueError:
            continue
        pairs.append(potential_pair[match])
        for item in data[index:]:
            if (item["user"]["id"] == pairs[-1][0]["user"]["id"] or
                item["user"]["id"] == pairs[-1][1]["user"]["id"]):

                item["matched"] = True

    return jsonify({"pairs": pairs})


def prep_data(data):
    for item in data:
        item["matched"] = False
    return data


def build_carpools():
    pairs = pair_users()
    for pair in pairs:
        driver, passenger, directions = determine_driver(pair)
        vehicle = Vehicle.query.filter(Vehicle.user_id ==
            driver["user_id"]).first()
        new_carpool = Carpool(accepted=False,
                              driver_calendar_id=driver["event"]["id"],
                              passenger_calendar_id=passenger["event"]["id"],
                              vehicle_id=vehicle["id"])
        db.session.add(new_carpool)
    db.session.commit()


def create_route(driver, passenger, driver_dest, passenger_dest):
    return [(driver.latitude, driver.longitude),
            (passenger.latitude, passenger.longitude),
            (passenger_dest.latitude, driver_dest.longitude),
            (driver_dest.latitude, driver_dest.longitude)]


def determine_driver(user_pair):
    pass
