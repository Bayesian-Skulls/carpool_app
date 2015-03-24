# -*- coding: utf-8 -*-
"""Extensions module."""

from flask.ext.sqlalchemy import SQLAlchemy
db = SQLAlchemy()

from flask.ext.migrate import Migrate
migrate = Migrate()

# Change this to HerokuConfig if using Heroku.
from flask.ext.appconfig import AppConfig
config = AppConfig()

from flask_oauthlib.client import OAuth
oauth = OAuth()

from flask.ext.login import LoginManager
login_manager = LoginManager()

from flask.ext.bcrypt import Bcrypt
bcrypt = Bcrypt()


