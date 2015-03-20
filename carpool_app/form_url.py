import os
import json
import re
import urllib.request as url


def get_directions(points):
    base_url = "http://open.mapquestapi.com/directions/v2/route?key="\
                + os.environ["MAPQUESTAPI"] +\
                "&callback=renderAdvancedNarrative&outFormat=json&routeType="\
                "fastest&timeType=1&enhancedNarrative=false&shapeFormat=raw"\
                "&generalize=0&locale=en_US&unit=m"

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


def get_lat_long(address):
    base_url = "http://open.mapquestapi.com/geocoding/v1/address?key="\
                + os.environ["MAPQUESTAPI"] +\
                "&callback=renderOptions&inFormat=kvp&outFormat=json&location="

    base_url += "{street_number} {street},{city},{state},{zip}".format(
        **address)
    base_url = base_url.replace(" ", "%20")
    request = url.urlopen(base_url)
    request = str(request.read(), encoding="utf-8")
    data = json.loads(re.findall(r"\((.+)\);", request)[0])
    for result in data["results"]:
        for location in result["locations"]:
            return (location["latLng"]["lat"], location["latLng"]["lng"])


def create_route(driver, passenger, driver_dest, passenger_dest):
    return [(driver.latitude, driver.longitude),
            (passenger.latitude, passenger.longitude),
            (passenger_dest.latitude, driver_dest.longitude),
            (driver_dest.latitude, driver_dest.longitude)]


# def lat_long_to_address(latitude, longitude):
#     base_url = "http://open.mapquestapi.com/geocoding/v1/reverse?key="\
#                + os.environ["MAPQUESTAPI"] +\
#                "&callback=renderReverse&location=" + str(latitude) +\
#                "," + str(longitude)
#
#     request = url.urlopen(base_url)
#     request = str(request.read(), encoding="utf-8")
#     data = json.loads(re.findall(r"\((.+)\);", request)[0])
#
#     for item in data["results"]:
#         for location in item["locations"]:
#             address = {"street": location["street"],
#                        "city": location["adminArea5"],
#                        "state": location["adminArea3"],
#                        "zip": location["postalCode"]
#                       }
#     return address

def determine_best_route(user1, user2, user1_dest, user2_dest):
    route_candidate_1 = create_route(user1, user2, user1_dest, user2_dest)
    route_candidate_2 = create_route(user2, user1, user2_dest, user1_dest)

    driver, directions = select_driver(route_candidate_1, route_candidate_2)

    if not driver:
        return user1, directions
    else:
        return user2, directions


def select_driver(route_1, route_2):
    route_1_directions = get_directions(route_1)
    route_2_directions = get_directions(route_2)

    if (route_1_directions["route"]["time"] <
            route_2_directions["route"]["time"]):
        return 0, route_1_directions
    else:
        return 1, route_2_directions


if __name__ == '__main__':
    # test_list = [(35.820685, -78.740033),
    #              (35.818945, -78.746141),
    #              (36.063428, -78.963891),
    #              (36.001931, -78.874118)]
    #
    # print(get_directions(test_list))

    # test_address = {"street_number": "6722",
    #                 "street": "Deerview Trail",
    #                 "city": "Durham",
    #                 "state": "NC",
    #                 "zip": "27712"}
    #
    # print(get_lat_long(test_address))

    test_user = {"id": 3,
                 "name": "Alan Grissett",
                 "email": "alan@blah.com",
                 "street_number": "6205",
                 "street": "Craig Road",
                 "city": "Durham",
                 "state": "NC",
                 "zip": "27712",
                 "lat": 36.09228,
                 "long": -78.975514}

    test_user2 = {"id": 6,
                  "name": "Jason",
                  "email": "jason@blah.com",
                  "street_number": "6722",
                  "street": "Deerview Trail",
                  "city": "Durham",
                  "state": "NC",
                  "zip": "27712",
                  "lat": 36.093091,
                  "long": -78.975637}

    test_work = {"name": "Iron Yard",
                 "user_id": 3,
                 "street_number": "334",
                 "street": "Blackwell Street",
                 "city": "Durham",
                 "state": "NC",
                 "zip": "27701",
                 "lat": 35.993485,
                 "long": -78.903975}

    test_work2 = {"name": "Monuts",
                  "user_id": 6,
                  "street_number": "1002",
                  "street": "9th Street",
                  "city": "Durham",
                  "state": "NC",
                  "zip": "27705",
                  "lat": 36.01391,
                  "long": -78.921528}
