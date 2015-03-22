#!/usr/bin/env python
import os
from random import shuffle
from faker import Faker
from datetime import datetime, timedelta
from flask.ext.script import Manager, Shell, Server
from flask.ext.migrate import MigrateCommand
from flask.ext.script.commands import ShowUrls, Clean
from seeder import user_generator, generate_location_json, generate_vehicle
from carpool_app import create_app, db
from carpool_app.views.angular_view import (register_or_login_user,
                                            update_user, add_work,
                                            add_calendar, add_vehicle)
from carpool_app.models import User, Work

app = create_app()
manager = Manager(app)

manager.add_command('server', Server())
manager.add_command('db', MigrateCommand)
manager.add_command('show-urls', ShowUrls())
manager.add_command('clean', Clean())


@manager.shell
def make_shell_context():
    """ Creates a python REPL with several default imports
        in the context of the app
    """
    return dict(app=app, db=db)


@manager.command
def seed_all():
    seed_users()
    seed_addresses()
    seed_work()


@manager.command
def seed_users():
    user_list = user_generator(20)
    for user in user_list:
        register_or_login_user(user)


@manager.command
def seed_vehicles():
    users = User.query.all()
    for user in users:
        data = generate_vehicle(user.id)
        add_vehicle(user.id, data)


@manager.command
def seed_addresses():
    users = User.query.all()
    key = app.config.get("MAPQUESTAPI")
    for user in users:
        data = generate_location_json(key)
        update_user(user.id, data)


@manager.command
def seed_work():
    fake = Faker()
    users = User.query.all()
    key = app.config.get("MAPQUESTAPI")
    for user in users:
        data = generate_location_json(key)
        data["name"] = fake.company()
        add_work(user.id, data)


@manager.command
def seed_calendar():
    users = User.query.all()
    data = {}
    for user in users:
        data["work_id"] = Work.query.filter(Work.user_id == user.id).first().id
        delta = timedelta(hours=33)
        delta2 = timedelta(hours=41)
        data["arrival_datetime"] = datetime.today() + delta
        data["arrival_datetime"] = datetime.strftime(data["arrival_datetime"],
                                                     "%Y-%m-%dT%H:%M:%S.%fZ")
        data["departure_datetime"] = datetime.today() + delta2
        data["departure_datetime"] = datetime.strftime(
            data["departure_datetime"], "%Y-%m-%dT%H:%M:%S.%fZ")
        add_calendar(user.id, data)


if __name__ == '__main__':
    manager.run()
