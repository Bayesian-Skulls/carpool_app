import json
import re
import urllib.request as url
from faker import Faker
from random import randint, uniform, shuffle

fake = Faker()


def user_generator(n):
    user_list = []
    for i in range(n//2):
        mname = fake.name_male()
        email = mname.replace(" ", "").lower()
        user_list.append({"name": mname, "email": email + "@carpool.com", "facebook_id": str(randint(100, 10000)),
                          "gender": "male"})
    for i in range(n//2):
        fname = fake.name_female()
        email = fname.replace(" ", "").lower()
        user_list.append({"name": fname, "email": email + "@carpool.com", "facebook_id": str(randint(100, 10000)),
                          "gender": "female"})
    return user_list


def generate_vehicle(user_id):
    n = randint(0, 1)
    plate = list(fake.address().replace(" ", "")[:5])
    shuffle(plate)
    plate = "".join(plate)
    if n == 0:
        car = {"id": user_id,
               "year": 2015,
               "make": "Smart Car",
               "model": "Pure Coupe",
               "plate_number": plate}
    else:
        car = {"id": user_id,
               "year": 1987,
               "make": "Lamborghini",
               "model": "Countach",
               "plate_number": plate}
    return car


def generate_location_json(key):
    cities = ['Raleigh', 'Durham']
    shuffle(cities)
    origin = cities.pop()
    latitude, longitude = generate_coordinate(origin)
    data = lat_long_to_address(key, latitude, longitude)
    data['latitude'] = latitude
    data['longitude'] = longitude
    return data


def lat_long_to_address(key, latitude, longitude):
    base_url = "http://open.mapquestapi.com/geocoding/v1/reverse?key="\
               + key +\
               "&callback=renderReverse&location=" + str(latitude) +\
               "," + str(longitude)

    request = url.urlopen(base_url)
    request = str(request.read(), encoding="utf-8")
    data = json.loads(re.findall(r"\((.+)\);", request)[0])
    address = {}
    for item in data["results"]:
        for location in item["locations"]:
            address = {"street": location["street"],
                       "city": location["adminArea5"],
                       "state": location["adminArea3"],
                       "zip_code": location["postalCode"]
                      }
    return address


# North South
# Raleigh Min, Max ==  35.730954, 35.908726
# Durham Min, Max ==   35.963243, 36.069284

# East West
# Raleigh Min, Max ==  -78.782904, -78.580220
# Durham Min, Max == -79.012512, -78.830551


def generate_coordinate(city):
    if city == 'Raleigh':
        # returns (lat, long) tuple
        return uniform(35.730954, 35.908726), uniform(-78.782904, -78.580220)
    else:
        return uniform(35.963243, 36.069284), uniform(-79.012512, -78.830551)


def build_seed(k):
    file = open("seed.data", "w+")
    file.write("id,start,start_lat,start_long,dest,dest_lat,dest_long,dest_time\n")
    csv = ""
    for n in range(k):
        latR, longR = generate_coordinate("Raleigh")
        latD, longD = generate_coordinate("Durham")
        csv = csv + "{},{},{},{},{},{},{},{}".format(n, "Raleigh", latR, longR, "Durham", latD, longD, "9:00\n")
    file.write(csv)
    file.close()
