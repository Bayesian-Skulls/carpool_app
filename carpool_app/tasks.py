import json
import re
import statistics as st
from decimal import Decimal
from datetime import datetime, timedelta
from flask import current_app
import urllib.request as url
import mandrill
from flask import jsonify
from random import shuffle
from .extensions import db, config
from .models import User, Work, Calendar, Vehicle, Carpool


def get_events_by_time():
    start_time = timedelta(hours=18)
    end_time = timedelta(hours=18, minutes=30)
    start_time = datetime.now() + start_time
    end_time = datetime.now() + end_time
    events = Calendar.query.filter(Calendar.arrival_datetime < end_time).\
        filter(Calendar.arrival_datetime >= start_time).all()
    events = [event.to_dict() for event in events]
    return events



def pair_event_and_driver():
    events = get_events_by_time()
    event_by_user = []
    for event in events:
        user = User.query.filter(User.id == event["user_id"]).first().to_dict()
        work = Work.query.filter(Work.id == event["work_id"]).first().to_dict()
        event_by_user.append({"user": user, "work": work, "event": event})
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

    return pairs


def prep_data(data):
    for item in data:
        item["matched"] = False
    return data


def build_carpools():
    new_carpools = []
    pairs = pair_users()
    for pair in pairs:
        driver, passenger, directions = determine_best_route(pair)
        send_confirm_email([driver["user"]["id"], passenger["user"]["id"]])
        vehicle = Vehicle.query.filter(Vehicle.user_id ==
                                       driver["user"]["id"]).first()
        new_carpool = Carpool(driver_accepted=None,
                              passenger_accepted=None,
                              driver_calendar_id=driver["event"]["id"],
                              passenger_calendar_id=passenger["event"]["id"],
                              vehicle_id=vehicle.id,
                              driver_id = driver["user"]["id"],
                              passenger_id = passenger["user"]["id"])
        db.session.add(new_carpool)
        new_carpools.append(new_carpool.to_dict())
    db.session.commit()
    return jsonify({"carpools": new_carpools})


def create_route(driver_home, passenger_home, driver_dest, passenger_dest):
    return [(driver_home), (passenger_home), (passenger_dest), (driver_dest)]


def determine_best_route(user_pair):
    user1, user2 = user_pair
    route_candidate_1 = create_route((user1["user"]["latitude"],
                                      user1["user"]["longitude"]),
                                     (user2["user"]["latitude"],
                                      user2["user"]["longitude"]),
                                     (user1["work"]["latitude"],
                                      user1["work"]["longitude"]),
                                     (user2["work"]["latitude"],
                                      user2["work"]["longitude"]))
    route_candidate_2 = create_route((user2["user"]["latitude"],
                                      user2["user"]["longitude"]),
                                     (user1["user"]["latitude"],
                                      user1["user"]["longitude"]),
                                     (user2["work"]["latitude"],
                                      user2["work"]["longitude"]),
                                     (user1["work"]["latitude"],
                                      user1["work"]["longitude"]))

    driver, directions = select_driver(route_candidate_1, route_candidate_2)

    if not driver:
        return user1, user2, directions
    else:
        return user2, user1, directions


def select_driver(route_1, route_2):
    route_1_directions = get_directions(route_1)
    route_2_directions = get_directions(route_2)

    if (route_1_directions["route"]["time"] <
            route_2_directions["route"]["time"]):
        return 0, route_1_directions
    else:
        return 1, route_2_directions


def get_directions(points):
    base_url = "http://open.mapquestapi.com/directions/v2/route?key={}"\
               "&callback=renderAdvancedNarrative&outFormat=json&routeType="\
               "fastest&timeType=1&enhancedNarrative=false&shapeFormat=raw"\
               "&generalize=0&locale=en_US&unit=m".\
               format(current_app.config["MAPQUESTAPI"])

    base_url + "&from={},{}".format(points[0][0], points[0][1])

    for index, point in enumerate(points):
        if not index:
            base_url += "&from={},{}".format(point[0], point[1])
        else:
            base_url += "&to={},{}".format(point[0], point[1])

    base_url += "&drivingStyle=2"

    request = url.urlopen(base_url)
    request = str(request.read(), encoding="utf-8")
    return json.loads(re.findall(r"\((.+)\);", request)[0])


def send_confirm_email(carpool_users):
    response = []
    base_url = "http://mandrillapp.com/api/1.0/messages/send.json"
    email_html = "<p>TEST<p>"
    email_text = "This is only a test."
    mandrill_client = mandrill.Mandrill(current_app.config["MANDRILL_KEY"])
    for user in carpool_users:
        current_user = User.query.get(user)
        data = {
                "html": email_html,
                "text": email_text,
                "subject": "Carpool Confimation from RIDEO",
                "from_email": "no-reply@rideo.wrong-question.com",
                "from_name": "Rideo Confirmations",
                "to": [
                        {
                        "email": current_user.email,
                        "name": current_user.name,
                        "type": "to"
                        }
                       ],
                "headers": {
                "Reply-To": "no-reply@rideo.wrong-question.com"
                },
                "important": False,
                "track_opens": None,
                "track_clicks": None,
                "auto_text": None,
                "auto_html": None,
                "inline_css": None,
                "url_strip_qs": None,
                "preserve_recipients": None,
                "view_content_link": None,
                "bcc_address": None,
                "tracking_domain": None,
                "signing_domain": None,
                "return_path_domain": None,
                "merge": False,
                "merge_language": "mailchimp",
                "global_merge_vars": [
                {
                    "name": "merge1",
                    "content": "merge1 content"
                }
                ],
                "merge_vars": [
                    {
                        "rcpt": user,
                        "vars": [
                        {
                            "name": "merge2",
                            "content": "merge2 content"
                        }
                    ]
                    }
                ],
                "tags": [
                "password-resets"
                ],
                "subaccount": None,
                "google_analytics_domains": [
                    None
                ],
                "google_analytics_campaign": None,
                "metadata": {
                    "website": "rideo.wrong-question.com"
                },
            "recipient_metadata": [
            {
                "rcpt": current_user.email,
                "values": {
                    "user_id": current_user.id
                }
            }
            ],
            # "images": [
            #     {
            #         "type": "image/png",
            #         "name": "IMAGECID",
            #         "content": "ZXhhbXBsZSBmaWxl"
            #     }
            # ]
            }

        result = mandrill_client.messages.send(message=data, async=False,
                                               ip_pool='Main Pool')
        print(result)
    return jsonify({"results": result}), 200


def get_rider_phone_numbers(carpool):
    for driver_id, passenger_id in carpool.users():
        driver = User.query.filter_by(user_id=driver_id).first()
        passenger = User.query.get(user_id=passenger_id).first()
        driver_phone = driver.phone_number
        pass_phone = passenger.phone_number
    return driver_phone, pass_phone


def get_gas_prices(driver_id):
    driver = User.query.filter_by(id=driver_id).first()
    driver_lat = driver.latitude
    driver_lon = driver.longitude
    api_call_url = "http://devapi.mygasfeed.com/stations/radius/{}/{}/5/" \
               "reg/Price/{}.json".format(driver_lat, driver_lon, current_app.config["MYGASFEEDAPI"])
    request = url.urlopen(api_call_url).read().decode("utf-8")
    request = json.loads(request)
    '''request is now a dictionary'''
    stations = request["stations"]
    '''stations is a list of dicts'''
    prices = [station["reg_price"] for station in stations]
    prices = [i for i in prices if i !="N/A"]
    average_price = round(st.mean([float(price) for price in prices]), 2)
    return average_price
