from faker import Faker
from random import randint
from random import random, uniform
from os import write

fake = Faker()


def user_generator(n):
    user_list = []
    for i in range(n//2):
        mname = fake.name_male()
        email = mname.replace(" ", "").lower()
        user_list.append({"name": mname, "email": email + "@carpool.com", "facebook_id": randint(100, 10000),
                          "gender": "male"})
    for i in range(n//2):
        fname = fake.name_female()
        email = fname.replace(" ", "").lower()
        user_list.append({"name": fname, "email": email + "@carpool.com", "facebook_id": randint(100, 10000),
                          "gender": "female"})

    return user_list



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
        csv = csv + "{},{},{},{},{},{},{},{}".format(n, "Raleigh", latR, longR,"Durham", latD, longD, "9:00\n")
    file.write(csv)
    file.close()