from flask import Flask, render_template

from . import models
from .extensions import db, migrate, config
from .views import carpool_app


SQLALCHEMY_DATABASE_URI = "sqlite:////tmp/carpool_app.db"
DEBUG = True
SECRET_KEY = 'development-key'


def create_app():
    app = Flask(__name__)
    app.config.from_object(__name__)
    app.register_blueprint(carpool_app)

    config.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)

    return app