from faker import Faker
from random import randint, choice
from seeder import generate_location_json
from flask.ext.script import Manager
from carpool_app import create_app, db
from carpool_app.tasks import build_carpools
from seeder import generate_vehicle
from datetime import datetime, date, time, timedelta
from itertools import chain
from carpool_app.models import User, Work, Vehicle, Calendar

fake = Faker()


def create_user(key):
    name, gender = choice([(fake.name_male(), 'male'), (fake.name_female(), 'female')])
    email = name.replace(" ", "").lower()
    user = {"name": name, "email": email + "@carpool.com",
            "facebook_id": str(randint(100, 10000)), "gender": gender}
    user_location = generate_location_json(key)
    user.update(user_location)
    user = User(**user)
    db.session.add(user)
    db.session.commit()
    work = {"name": fake.company(), "user_id": user.id}
    work.update(generate_location_json(key))
    work = Work(**work)
    db.session.add(work)
    vehicle = generate_vehicle(user.id)
    vehicle = Vehicle(**vehicle)
    db.session.add(vehicle)
    db.session.commit()
    create_calendar(user.id, work.id)


def create_calendar(user_id, work_id):
    # Generate a week of datetimes
    times = [[0, 1, 2, 3, 4, 5], [6, 7]*10, [8]*40, [9]*60,
             [10, 11, 12, 13, 14, 15, 16, 17, 18, 17, 18]*2,
             [19, 20, 21, 22, 23]]
    arrival = choice(list(chain.from_iterable(times)))
    work_day = timedelta(hours=24)
    arrival_time = time(hour=arrival)
    work_date = date.today()
    work_span = timedelta(hours=8)
    for n in range(5):
        work_date = work_date + work_day
        arrival_datetime = datetime.combine(work_date, arrival_time)
        departure_datetime = arrival_datetime + work_span
        calendar = {"user_id": user_id,
                    "work_id": work_id,
                    "arrival_datetime": arrival_datetime,
                    "departure_datetime": departure_datetime}
        calendar = Calendar(**calendar)
        db.session.add(calendar)
    db.session.commit()


app = create_app()
manager = Manager(app)


@manager.command
def add_user():
    key = app.config.get("MAPQUESTAPI")
    for n in range(50):
        create_user(key)

@manager.command
def create_carpools():
    json = build_carpools().data.decode("utf-8")
    logs = ""
    if os.path.isfile("carpools.log"):
        with open("carpools.log","r") as f:
            logs = f.read()
    logs = "{}\n{}:\n{}".format(logs, str(datetime.now()), json)
    with open("carpools.log","w") as f:
        f.write(logs)
    return "Success"

if __name__ == '__main__':
    manager.run()
