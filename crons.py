from faker import Faker
from random import randint, choice
from seeder import generate_location_json
from flask.ext.script import Manager
from carpool_app import create_app
from carpool_app.tasks import build_carpools
from seeder import generate_vehicle
from itertools import chain

fake = Faker()

# Create a User  (check)
# Give them a job  (check)
# Give them a vehicle (check)
# Give them a calendar
def create_user(key):
    name, gender = choice([(fake.name_male(), 'male'), (fake.name_female(), 'female')])
    email = name.replace(" ", "").lower()
    user = {"name": name, "email": email + "@carpool.com",
            "facebook_id": str(randint(100, 10000)), "gender": gender}
    user_location = generate_location_json(key)
    user.update(user_location)
    user['id'] = 666
    print("User: ", user)
    work = {"name": fake.company(), "user_id": user['id']}
    work.update(generate_location_json(key))
    print("Work: ", work)

    vehicle = generate_vehicle(user['id'])
    print(vehicle)



app = create_app()
manager = Manager(app)

@manager.command
def create_calendar():
    # Generate a week of datetimes
    times = [[0, 1, 2, 3, 4, 5], [6, 7]*10, [8]*40, [9]*60,
             [10, 11, 12, 13, 14, 15, 16, 17, 18, 17, 18]*2,
             [19, 20, 21, 22, 23]]
    arrival = choice(list(chain.from_iterable(times)))
    departure = (arrival+8) % 24
    print("Arrival: {}, Departure: {}".format(arrival, departure))


@manager.command
def add_user():
    key = app.config.get("MAPQUESTAPI")
    create_user(key)

@manager.command
def print_carpools():
    json = build_carpools()
    print(json)
    return "Success"

if __name__ == '__main__':
    manager.run()
