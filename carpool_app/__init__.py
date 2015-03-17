from flask import Flask, render_template

from . import models
from .extensions import db, migrate, config, oauth
from .views.angular_view import angular_view, api
from .views.users import users, facebook


SQLALCHEMY_DATABASE_URI = "postgres://localhost/carpool_app"
DEBUG = True
SECRET_KEY = 'development-key'


def create_app():
    app = Flask(__name__)
    #app.config.from_object(__name__)
    app.config.from_pyfile('config.cfg')
    app.register_blueprint(angular_view)
    app.register_blueprint(api, url_prefix='/api/v1')
    app.register_blueprint(users)

    config.init_app(app)
    oauth.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)

    return app