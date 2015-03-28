import json
import re
import statistics as st
from datetime import datetime, timedelta
import urllib
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
    start_time = datetime.now().replace(second=0, microsecond=0) + start_time
    end_time = datetime.now().replace(second=0, microsecond=0) + end_time
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



def create_google_maps_link(driver_id, passenger_id):
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
    mandrill_client = mandrill.Mandrill(current_app.config["MANDRILL_KEY"])
    for user in carpool_users:
        current_user = User.query.get(user)
        data = generate_mandrill_request(current_user, "carpool_created")
        result = mandrill_client.messages.send_template(
            template_name="untitled-template", template_content=[],
            message=data, async=False, ip_pool='Main Pool')
    return jsonify({"results": result}), 200


def generate_mandrill_request(user, email_type):
    email_html, email_text = "", ""
    if email_type == "carpool_created":
        email_html = "<p>CREATED CARPOOL!</p>"
        email_text = "This is some text!"
    elif email_type == "unconfirmed_carpool":
        email_html = "<p>Yo, Someone Forgot to Confirm!</p>"
        e_mail_text = "Out of luck buddy!"

    data = {

            "template_name": "untitled-template",
            "template_content": [
                {
                    "name": user.name,
                    "content": email_text
                }
            ],
            "to": [
                    {
                    "email": user.email,
                    "name": user.name,
                    "type": "to"
                    }
                   ],
            "headers": {
            "Reply-To": "no-reply@rideo.wrong-question.com"
            },
            "html": email_html,
            "text": email_text,
            "subject": "Carpool Confimation from RIDEO",
            "from_email": "no-reply@rideo.wrong-question.com",
            "from_name": "Rideo Confirmations",
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
            "merge": True,
            "merge_language": "mailchimp",
            "global_merge_vars": [
            {
                "name": user.name,
                "content": email_type
            }
            ],
            "merge_vars": [
                {
                    "rcpt": user.name,
                    "vars": [
                    {
                        "name": "merge2",
                        "content": "merge2 content"
                    }
                ]
                }
            ],
            "tags": [
            email_type
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
            "rcpt": user.email,
            "values": {
                "user_id": user.id
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
    return data


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
    api_call_url = "http://api.mygasfeed.com/stations/radius/{}/{}/5/" \
               "reg/Price/{}.json".format(driver_lat, driver_lon, current_app.config["MYGASFEEDAPI"])
    print(api_call_url)
    errors = 0
    while errors < 3:
        request = url.urlopen(api_call_url).read().decode("utf-8")
        if ValueError:
            errors += 1
        else:
            request = json.loads(request)
            stations = request["stations"]
            prices = [station["reg_price"] for station in stations]
            prices = [i for i in prices if i !="N/A"]
            average_price = round(st.mean([float(price) for price in prices]), 2)
            return average_price
    return 2.4


def get_vehicle_api_id(user_id):
    vehicle = Vehicle.query.filter_by(user_id=user_id).first()
    make = vehicle.make
    model = vehicle.model
    year = vehicle.year
    api_call_for_ID = "https://api.edmunds.com/api/vehicle/v2/{}/{}/{}?fmt=json&api_key={}".format \
        (make, model, year, current_app.config["EDMUNDSAPIKEY"])
    try:
        request = url.urlopen(api_call_for_ID).read().decode("utf-8")
        request = json.loads(request)
        style_id = request["styles"][0]["id"]
        return style_id, year
    except urllib.error.HTTPError:
        return "1", year



def default_mpg(year):
    if year >= 2000:
        return "20"
    elif year >= 1990:
        return "18"
    else:
        return "12"


def check_dict(dic):
    if "Specifications" in dic.values():
        return dic
    if "Epa Combined Mpg" in dic.values():
        return dic

def clean_dict(list):
    return [i for i in list if i != None]


def get_mpg(style_id, year):
    if style_id == "1":
        return default_mpg(year)
    api_call_for_mpg = "https://api.edmunds.com/api/vehicle/v2/styles/{}/"  \
        "equipment?fmt=json&api_key={}".format(style_id, current_app.config["EDMUNDSAPIKEY"])
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
    if "." not in cost:
        cost = cost + ".00"
        return cost
    elif cost[-2] == ".":
        cost = cost + "0"
        return cost
    else:
        return cost


def user_money(user_id):
    driver = User.query.get(user_id)
    home = (driver.latitude, driver.longitude)
    work = Work.query.filter_by(user_id=user_id).first()
    workplace = (work.latitude, work.longitude)
    points = [home, workplace]
    mpg = float(get_mpg(*get_vehicle_api_id(user_id)))
    gas_price = float(get_gas_prices(user_id))
    result = get_directions(points)
    distance = float(result["route"]["distance"])
    cost = round((distance * 2) * gas_price / mpg, 2)
    half = round((cost / 2), 2)
    total_cost = format_money(str(cost))
    half_cost = format_money(str(half))
    return jsonify({"cost": total_cost, "half_cost": half_cost}), 200


def select_random_stat():
    filename = ("carpool_example_stats.txt")
    data = open("carpool_example_stats.txt").readlines()
    stats = random.choice(data).strip("\n")
    return stats


def get_total_carpool_cost(carpool_id):
    carpool = Carpool.query.get_or_404(carpool_id).details
    points = [(carpool["driver"]["info"]["latitude"],
               carpool["driver"]["info"]["longitude"]),
              (carpool["passenger"]["info"]["latitude"],
               carpool["passenger"]["info"]["longitude"]),
              (carpool["passenger"]["work"]["latitude"],
               carpool["passenger"]["work"]["longitude"]),
              (carpool["driver"]["work"]["latitude"],
               carpool["driver"]["work"]["longitude"])]

    distance = get_directions(points)["route"]["distance"]

    return distance
