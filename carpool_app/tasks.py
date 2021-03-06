import json
import re
import statistics as st
from random import random
from datetime import datetime, timedelta
import urllib
from twilio.rest import TwilioRestClient
from flask import current_app
import urllib.request as url
import mandrill
from flask import jsonify
from random import shuffle
from .extensions import db
from .models import User, Work, Calendar, Vehicle, Carpool


def get_events_by_time():
    """get carpool events 18 hours in the future"""
    start_time = timedelta(hours=18)
    end_time = timedelta(hours=18, minutes=30)
    start_time = datetime.now().replace(second=0, microsecond=0) + start_time
    end_time = datetime.now().replace(second=0, microsecond=0) + end_time
    events = Calendar.query.filter(Calendar.arrival_datetime < end_time).\
        filter(Calendar.arrival_datetime >= start_time).all()
    events = [event.to_dict() for event in events]
    return events


def pair_event_and_driver():
    """get user for event 18 hours in the future"""
    events = get_events_by_time()
    event_by_user = []
    for event in events:
        user = User.query.filter(User.id == event["user_id"]).first().to_dict()
        work = Work.query.filter(Work.id == event["work_id"]).first().to_dict()
        event_by_user.append({"user": user, "work": work, "event": event})
    return event_by_user


def pair_users():
    """pair drivers with passengers"""
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
    """format data to be paired"""
    for item in data:
        item["matched"] = False
    return data


def build_carpools():
    """generate carpool objects"""
    new_carpools = []
    pairs = pair_users()
    for pair in pairs:
        driver, passenger, directions = determine_best_route(pair)
        if driver:
            send_confirm_email([driver["user"]["id"], passenger["user"]["id"]])
            vehicle = Vehicle.query.filter(Vehicle.user_id ==
                                           driver["user"]["id"]).first()
            new_carpool = Carpool(
                driver_accepted=None,
                passenger_accepted=None,
                driver_calendar_id=driver["event"]["id"],
                passenger_calendar_id=passenger["event"]["id"],
                vehicle_id=vehicle.id,
                driver_id=driver["user"]["id"],
                passenger_id=passenger["user"]["id"])
            db.session.add(new_carpool)
            new_carpools.append(new_carpool.to_dict())
    db.session.commit()
    return jsonify({"carpools": new_carpools})


def create_route(driver_home, passenger_home, driver_dest, passenger_dest):
    """create list of stops on the route"""
    return [(driver_home), (passenger_home), (passenger_dest), (driver_dest)]


def create_google_maps_link(driver_id, passenger_id):
    """use route stops to generate a URL for mapquest"""
    driver = User.query.get(driver_id)
    driver_work = Work.query.filter(Work.user_id == driver_id).first()
    passenger = User.query.get(passenger_id)
    passenger_work = Work.query.filter(Work.user_id == passenger_id).first()
    route = create_route((driver.latitude, driver.longitude),
                         (passenger.latitude, passenger.longitude),
                         (driver_work.latitude, driver_work.longitude),
                         (passenger_work.latitude, passenger_work.longitude))
    leg1 = "https://www.google.com/maps/dir/Current+Location/{},{}/"\
        .format(route[1][0], route[1][1])
    leg2 = "https://www.google.com/maps/dir/Current+Location/{},{}/"\
        .format(route[2][0], route[2][1])
    leg3 = "https://www.google.com/maps/dir/Current+Location/{},{}/"\
        .format(route[3][0], route[3][1])
    leg4 = "https://www.google.com/maps/dir/Current+Location/{},{}/"\
        .format(route[0][0], route[0][1])
    return [leg1, leg2, leg3, leg4]


def determine_best_route(user_pair):
    """iterate over pairs to determine possible routes"""
    user1, user2 = user_pair
    route_candidate_1 = create_route((user1["user"]["latitude"],
                                      user1["user"]["longitude"]),
                                     (user2["user"]["latitude"],
                                      user2["user"]["longitude"]),
                                     (user2["work"]["latitude"],
                                      user2["work"]["longitude"]),
                                     (user1["work"]["latitude"],
                                      user1["work"]["longitude"]))
    route_candidate_2 = create_route((user2["user"]["latitude"],
                                      user2["user"]["longitude"]),
                                     (user1["user"]["latitude"],
                                      user1["user"]["longitude"]),
                                     (user1["work"]["latitude"],
                                      user1["work"]["longitude"]),
                                     (user2["work"]["latitude"],
                                      user2["work"]["longitude"]))

    driver, directions = select_driver(route_candidate_1, route_candidate_2)

    if not driver:
        if check_carpool_efficiency(user1, directions):
            return user1, user2, directions
        else:
            return None, None, None
    else:
        if check_carpool_efficiency(user2, directions):
            return user2, user1, directions
        else:
            return None, None, None


def check_carpool_efficiency(driver, carpool_directions):
    """check the efficiency of the route"""
    driver_directions = get_directions([(driver["user"]['latitude'],
                                         driver["user"]["longitude"]),
                                        (driver["work"]["latitude"],
                                         driver["work"]["longitude"])])
    carpool_time = carpool_directions['route']['time']
    driver_time = driver_directions['route']['time']
    return not carpool_time >= (driver_time * 5)


def select_driver(route_1, route_2):
    """determine which user in pair will drive"""
    route_1_directions = get_directions(route_1)
    route_2_directions = get_directions(route_2)

    if (route_1_directions["route"]["time"] <
            route_2_directions["route"]["time"]):
        return 0, route_1_directions
    else:
        return 1, route_2_directions


def get_directions(points):
    """send stops to mapquest and get step by step directions"""
    base_url = "http://open.mapquestapi.com/directions/v2/route?key={}"\
               "&callback=renderAdvancedNarrative&outFormat=json&routeType="\
               "fastest&timeType=1&enhancedNarrative=false&shapeFormat=raw"\
               "&generalize=0&locale=en_US&unit=m".\
               format(current_app.config["MAPQUESTAPI"])

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
    """send email to users notifying them of their carpool status
    and partner"""
    results = []
    mandrill_client = mandrill.Mandrill(current_app.config["MANDRILL_KEY"])
    for index, user in enumerate(carpool_users):
        current_user = User.query.get(user)
        data = generate_mandrill_request(current_user, "carpool_created")
        content = [{"name": "TEXT1",
                    "content": "Thank you for choosing RIDEO!"},
                   {"name": "TEXT2",
                    "content": "Your rideshare for tomorrow has"
                               " been assigned.\n"
                               "Your rideshare buddy for tomorrow is {}".format(
                                   User.query.get(
                                       carpool_users[index-1]).name)}]
        results.append(mandrill_client.messages.send_template(
            template_name="new-rideo", template_content=content,
            message=data, async=False, ip_pool='Main Pool'))
    return jsonify({"results": results}), 200


def send_unconfirmed_email(carpool_users):
    """send email to user that his/her partner declined to participate"""
    results = []
    mandrill_client = mandrill.Mandrill(current_app.config["MANDRILL_KEY"])
    for index, user in enumerate(carpool_users):
        current_user = User.query.get(user)
        data = generate_mandrill_request(current_user, "unconfirmed_carpool")
        content = [{"name": "TEXT1",
                    "content": "Thank you for choosing RIDEO!"},
                   {"name": "TEXT2",
                    "content": "We regret to inform you that your carpool "
                               "was not confirmed for tomorrow."
                    }]
        results.append(mandrill_client.messages.send_template(
            template_name="uncontitled-template", template_content=content,
            message=data, async=False, ip_pool='Main Pool'))
    return jsonify({"results": results}), 200


def send_carpool_confirmed_email(carpool_id):
    """ send email to users with directions for carpools"""
    results = []
    carpool = Carpool.query.get_or_404(carpool_id)
    mandrill_client = mandrill.Mandrill(current_app.config["MANDRILL_KEY"])
    carpool_details = carpool.details
    current_user = User.query.get_or_404(
        carpool_details["driver"]["info"]["id"])
    date = datetime.strptime(carpool_details["driver"]["arrival"],
        "%Y-%m-%dT%H:%M:%S.%fZ")
    date = date.strftime("%B %d")
    data = generate_mandrill_request(current_user, "carpool_confirmed")
    links = create_google_maps_link(carpool_details["driver"]["info"]["id"],
                                    carpool_details["passenger"]["info"]["id"])
    content = [{"name": "DATE",
                "content": date},
               {"name": "LINK1",
                "content": links[0]},
               {"name": "LINK2",
                "content": links[1]},
               {"name": "LINK3",
                "content": links[2]},
               {"name": "LINK4",
                "content": links[3]}]
    results.append(mandrill_client.messages.send_template(
        template_name="rideo-template-1", template_content=content,
        message=data, async=False, ip_pool='Main Pool'))
    return jsonify({"results": results}), 200


def generate_mandrill_request(user, email_type):
    """generate mandrill email"""
    if email_type == "carpool_created":
        subject = "Ride Share Information from RIDEO"
    elif email_type == "unconfirmed_carpool":
        subject = "A Message from RIDEO"
    elif email_type == "carpool_confirmed":
        subject = "Ride Share Confirmed"

    data = {"subject": subject,
            "to": [{
                   "email": user.email,
                   "name": user.name,
                   "type": "to"
                   }
                   ],
            "headers": {
                "Reply-To": "no-reply@rideo.wrong-question.com"
            },
            "from_email": "no-reply@rideo.wrong-question.com",
            "from_name": "Rideo Confirmations",
            "inline_css": None,
            "merge": True,
            "merge_language": "mailchimp",
            "global_merge_vars": [{
                "name": "merge1",
                "content": "merge1 content"
            }
            ],
            "tags": [email_type]
            }
    return data


def get_gas_prices(driver_id):
    """get average price of regular gas within a 5 mile radius of
    user's pickup address"""
    driver = User.query.filter_by(id=driver_id).first()
    driver_lat = driver.latitude
    driver_lon = driver.longitude
    api_call_url = "http://api.mygasfeed.com/stations/radius/{}/{}/5/" \
        "reg/Price/{}.json".format(driver_lat, driver_lon,
                                   current_app.config["MYGASFEEDAPI"])
    errors = 0
    while errors < 3:
        request = url.urlopen(api_call_url).read().decode("utf-8")
        if ValueError:
            errors += 1
        else:
            request = json.loads(request)
            stations = request["stations"]
            prices = [station["reg_price"] for station in stations]
            prices = [i for i in prices if i != "N/A"]
            average_price = round(st.mean([float(price)
                                           for price in prices]), 2)
            return average_price
    return 2.4


def get_vehicle_api_id(user_id):
    """get the Style ID of a vehicle via Edmunds API"""
    vehicle = Vehicle.query.filter_by(user_id=user_id).first()
    make = vehicle.make
    model = vehicle.model
    year = vehicle.year
    api_call_for_ID = "https://api.edmunds.com/api/vehicle/v2"\
                      "/{}/{}/{}?fmt=json&api_key={}".format(
                          make, model, year,
                          current_app.config["EDMUNDSAPIKEY"])
    try:
        request = url.urlopen(api_call_for_ID).read().decode("utf-8")
        request = json.loads(request)
        style_id = request["styles"][0]["id"]
        return style_id, year
    except urllib.error.HTTPError:
        return "1", year


def default_mpg(year):
    """return a default mpg for a vehicle not found in the Edmunds DB"""
    if year >= 2000:
        return "20"
    elif year >= 1990:
        return "18"
    else:
        return "12"


def check_dict(dic):
    """search Edmunds json for combined MPG"""
    if "Specifications" in dic.values():
        return dic
    if "Epa Combined Mpg" in dic.values():
        return dic


def clean_dict(list):
    """Clean out NoneType objects from json object"""
    return [i for i in list if i is not None]


def get_mpg(style_id, year):
    """Get the EPA Combined MPG for a vehicle via the Edmunds API"""
    if style_id == "1":
        return default_mpg(year)
    api_call_for_mpg = "https://api.edmunds.com/api/vehicle/v2/styles/{}/"  \
        "equipment?fmt=json&api_key={}".format(style_id,
                                               current_app.config[
                                                   "EDMUNDSAPIKEY"])
    request = url.urlopen(api_call_for_mpg).read().decode("utf-8")
    request = json.loads(request)
    equipment_list = request["equipment"]
    specs = [check_dict(dic) for dic in equipment_list]
    clean = clean_dict(specs)
    attributes = clean[0]["attributes"]
    mpg = [check_dict(dic) for dic in attributes]
    clean_mpg = clean_dict(mpg)
    combined_mpg = clean_mpg[0]["value"]
    return combined_mpg


def format_money(cost):
    """format money strings to reflect US Currency"""
    if "." not in cost:
        cost = cost + ".00"
        return cost
    elif cost[-2] == ".":
        cost = cost + "0"
        return cost
    else:
        return cost


def route_coords(user_id):
    """get the coordinates of a user's home and workplace"""
    driver = User.query.get(user_id)
    home = (driver.latitude, driver.longitude)
    work = Work.query.filter_by(user_id=user_id).first()
    workplace = (work.latitude, work.longitude)
    points = [home, workplace]
    return user_id, points


def get_operands(user_id, points):
    """get operands of user and vehicle info to use in calculation"""
    mpg = float(get_mpg(*get_vehicle_api_id(user_id)))
    gas_price = float(get_gas_prices(user_id))
    distance = get_directions(points)["route"]["distance"]
    return distance, mpg, gas_price


def calculate_trip_cost(distance, mpg, gas_price):
    """use vehicle and user info to calculate the true cost of
    travel per day"""
    cost = round((float(distance) * 2) * gas_price / mpg, 2) * 7
    half = round((cost / 2), 2)
    total_cost = format_money(str(cost))
    half_cost = format_money(str(half))
    return jsonify({"cost": total_cost, "half_cost": half_cost}), 200


def select_random_stat():
    """generate a random carpool stat for dashboard"""
    filename = ("carpool_example_stats.txt")
    data = open("carpool_example_stats.txt").readlines()
    stats = random.choice(data).strip("\n")
    return stats


def get_rider_phone_numbers(carpool):
    """get the phone numbers associated with each carpool object"""
    for driver_id, passenger_id in carpool.users():
        driver = User.query.filter_by(user_id=driver_id).first()
        passenger = User.query.get(user_id=passenger_id).first()
        driver_phone = driver.phone_number
        pass_phone = passenger.phone_number
    return driver_phone, pass_phone


def generate_sms_message(phone_number):
    """create and send sms message"""
    client = TwilioRestClient(current_app.config["ACCOUNT_SID"],
                              current_app.config["AUTH_TOKEN"])
    message = client.messages.create(body="You trip for tomorrow has been"
                                          " planned. Please go to RIDEO to "
                                          "confirm.",
                                     to="+1{}".format(phone_number),
                                     from_="+19193440337")  # Our Twilio number
    return message.sid


def send_sms(carpool):
    """send sms to both users in a carpool"""
    for user in carpool.users:
        current_user = User.query.get(user)
        data = generate_sms_message(current_user.phone_number)
    return data, 200


def get_total_carpool_cost(carpool_id):
    """calculate the true cost of the driving the full carpool route"""
    carpool = Carpool.query.get_or_404(carpool_id).details
    points = [(carpool["driver"]["info"]["latitude"],
               carpool["driver"]["info"]["longitude"]),
              (carpool["passenger"]["info"]["latitude"],
               carpool["passenger"]["info"]["longitude"]),
              (carpool["passenger"]["work"]["latitude"],
               carpool["passenger"]["work"]["longitude"]),
              (carpool["driver"]["work"]["latitude"],
               carpool["driver"]["work"]["longitude"])]
    user_id = carpool["driver"]["info"]["id"]
    operands = get_operands(*route_coords(user_id))
    operands = operands[1:]
    distance = get_directions(points)["route"]["distance"]
    return calculate_trip_cost(distance, *operands)
