from flask import Flask, render_template

from . import models
from .extensions import db, migrate, config, oauth, login_manager
from .views.angular_view import angular_view, api
from .views.users import users, facebook



def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.cfg')
    app.register_blueprint(angular_view)
    app.register_blueprint(api, url_prefix='/api/v1')
    app.register_blueprint(users)

    config.init_app(app)
    oauth.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)

    return app
