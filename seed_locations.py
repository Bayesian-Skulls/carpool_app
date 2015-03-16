from random import random, uniform
from os import write

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