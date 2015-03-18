#!/usr/bin/env python
import os

from flask.ext.script import Manager, Shell, Server
from flask.ext.migrate import MigrateCommand
from flask.ext.script.commands import ShowUrls, Clean
from seeder import user_generator
from carpool_app import create_app, db
from carpool_app.views.angular_view import register_or_login_user

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
def seed_db():
    user_list = user_generator(20)
    for user in user_list:
        register_or_login_user(user)


if __name__ == '__main__':
    manager.run()
