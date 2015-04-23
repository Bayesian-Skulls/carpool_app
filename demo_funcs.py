import json
import re
import urllib.request as url
import random
from faker import Faker
from bokeh.palettes import brewer
from bokeh.sampledata import us_counties

fake = Faker()

colors = brewer["Spectral"][11] + brewer["PiYG"][5]
county_xs=[
   us_counties.data[code]['lons'] for code in us_counties.data
   if us_counties.data[code]['state'] == 'nc'
]
county_ys=[
   us_counties.data[code]['lats'] for code in us_counties.data
   if us_counties.data[code]['state'] == 'nc'
]




with open("carpool_app/config.cfg") as file:
    file_data = file.read()
    key = re.findall(r'MAPQUESTAPI="(.+)"', file_data)[0]


def get_line_shape(points, time=False):
    base_url = "http://open.mapquestapi.com/directions/v2/route?key={}" \
               "&callback=renderAdvancedNarrative&outFormat=json&routeType=" \
               "fastest&timeType=1&enhancedNarrative=false&shapeFormat=raw" \
               "&generalize=0&locale=en_US&unit=m".format(key)

    for index, point in enumerate(points):
        if not index:
            base_url += "&from={},{}".format(point[0], point[1])
        else:
            base_url += "&to={},{}".format(point[0], point[1])
    base_url += "&drivingStyle=2"
    request = url.urlopen(base_url)
    request = str(request.read(), encoding="utf-8")
    request = json.loads(re.findall(r"\((.+)\);", request)[0])
    if not time:
        return request["route"]["shape"]["shapePoints"]
    else:
        return (request["route"]["shape"]["shapePoints"],
                request["route"]["time"])


def parse_request(request):
    lats = [item[1] for item in enumerate(request) if item[0] % 2 == 0]
    longs = [item[1] for item in enumerate(request) if item[0] % 2 == 1]
    return lats, longs


def create_route(driver, passenger=None):
    if not passenger:
        return [(driver["home_latitude"], driver["home_longitude"]),
                (driver["work_latitude"], driver["work_longitude"])]
    else:
        return [(driver["home_latitude"], driver["home_longitude"]),
                (passenger["home_latitude"], passenger["home_longitude"]),
                (passenger["work_latitude"], passenger["work_longitude"]),
                (driver["work_latitude"], driver["work_longitude"])]


def create_users():
    home_addresses = ["609 N Boundary St. Raleigh, NC 27604",
                      "407 Polk St Raleigh, NC 27604",
                      "1129 Harvey St Raleigh, NC 27608",
                      "1507 Oberlin Rd Raleigh, NC 27608",
                      "499 N Driver St Durham, NC 27703",
                      "2107 Hart St Durham, NC 27703",
                      "1118 Carroll St Durham, NC 27707",
                      "1502 Southwood Dr Durham, NC 27707",
                      "2920 Millbrook Green Dr Raleigh, NC 27604",
                      "2198 Harrod St Raleigh, NC 27604",
                      "2201 Sierra Dr Raleigh, NC 27603",
                      "656 Maywood Ave Raleigh, NC 27603",
                      "210 Hampton Woods Ln Cary, NC 27607",
                      "598 Webster St Cary, NC 27511",
                      "201 E Rosemary St Chapel Hill, NC 27514",
                      "313 Caldwell St Chapel Hill, NC 27516"]

    work_addresses = ["334 Blackwell Street Durham, NC 27701",
                      "318 Blackwell St Durham, NC 27701",
                      "100 SAS Campus Dr Cary, NC 27513",
                      "1505 N Harrison Ave Cary, NC 27513",
                      "3600 Glenwood Ave Raleigh, NC 27612",
                      "2211 Summit Park Ln Raleigh, NC 27612",
                      "100 E Davie St Raleigh, NC 27601",
                      "511 W Hargett St Raleigh, NC 27603",
                      "115 N Duke St Durham, NC 27701",
                      "201 W Main St Durham, NC 27701",
                      "4205 S Miami Blvd Durham, NC 27703",
                      "5111 Chin Page Rd Durham, NC 27703",
                      "5404 Durham-Chapel Hill Blvd Durham, NC 27707",
                      "4600 old Chapel Hill rd Durham, NC 27707",
                      "1002 9th St Durham, NC 27705",
                      "1058 W Club Blvd Durham, NC 27701"]
    users_list = []
    for index, address in enumerate(home_addresses):

        new_user = {"name": fake.name()}
        home = address.replace(" ", "%20")
        work = work_addresses[index].replace(" ", "%20")
        new_user["home_latitude"], new_user["home_longitude"] = \
            get_lat_long(home)
        new_user["work_latitude"], new_user["work_longitude"] = \
            get_lat_long(work)
        users_list.append(new_user)

    return users_list


def get_lat_long(address):
    base_url = "http://open.mapquestapi.com/geocoding/v1/address?key={}" \
               "&location={}".format(key, address)

    request = url.urlopen(base_url)
    request = str(request.read(), encoding="utf-8")
    data = json.loads(request)
    for item in data["results"]:

        for location in item["locations"]:
            new_lat = location["latLng"]["lat"]
            new_long = location["latLng"]["lng"]
    return new_lat, new_long


def color_mapper(k):
    colors = []
    for _ in range(k):
        r = lambda: random.randint(0, 255)
        colors.append('#%02X%02X%02X' % (r(), r(), r()))
        
    def color_gen(x):
        # Generate list of random colors that match number of carpools
        return colors[x]
    return color_gen


def pair_users(users):
    pairs = []
    for user in users:
        user["matched"] = False
    random.shuffle(users)

    for index, row in enumerate(users):
        current = []
        potential_pair = []
        for row2 in users[index:]:
            if (not row["matched"] and not row2["matched"]) and row != row2:
                home_dist = (((float(row["home_latitude"]) -
                               float(row2["home_latitude"]))**2 +
                              (float(row["home_longitude"]) -
                               float(row2["home_longitude"]))**2)**.5)
                work_dist = (((float(row["work_latitude"]) -
                               float(row2["work_latitude"]))**2 +
                              (float(row["work_longitude"]) -
                               float(row2["work_longitude"]))**2)**.5)
                current.append(home_dist + work_dist)
                potential_pair.append((row, row2))
        try:
            match = current.index(min(current))
            pairs.append(potential_pair[match])
        except ValueError:
            continue
        for item in users[index:]:
            if (item["name"] == pairs[-1][0]["name"] or
                        item["name"] == pairs[-1][1]["name"]):

                item["matched"] = True

    return pairs


def determine_best_route(user_pair):
    user1, user2 = user_pair
    route_candidate_1 = create_route(user1, user2)
    route_candidate_2 = create_route(user2, user1)

    driver, directions, time = select_driver(route_candidate_1,
                                             route_candidate_2)
    if not driver:
        driver = user1
    else:
        driver = user2

    if check_carpool_efficiency(driver, directions, time):
        return directions, driver
    else:
        return None, None


def check_carpool_efficiency(driver, carpool_directions, carpool_time):
    driver_directions, driver_time = get_line_shape([(driver["home_latitude"],
                                                      driver["home_longitude"]),
                                                     (driver["work_latitude"],
                                                      driver["work_longitude"])],
                                                    time=True)

    return not carpool_time >= (driver_time * 1.5)


def select_driver(route_1, route_2):
    route_1_directions, time_1 = get_line_shape(route_1, time=True)
    route_2_directions, time_2 = get_line_shape(route_2, time=True)

    if (time_1 < time_2):
        return 0, route_1_directions, time_1
    else:
        return 1, route_2_directions, time_2
