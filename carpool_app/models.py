from .extensions import db, login_manager, bcrypt
from flask.ext.login import UserMixin

from datetime import datetime


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    encrypted_password = db.Column(db.String(60))
    paypal = db.Column(db.String(64))
    drivers_license = db.Column(db.Integer)
    plate_number = db.Column(db.String(16))
    street_number = db.Column(db.String(16))
    street = db.Column(db.String(64))
    city = db.Column(db.String(64))
    state = db.Column(db.String(64))
    zip = db.Column(db.String(64))
    lat = db.Column(db.Float)
    long = db.Column(db.Float)

    def get_password(self):
        return getattr(self, "_password", None)

    def set_password(self, password):
        self._password = password
        self.encrypted_password = bcrypt.generate_password_hash(password)

    password = property(get_password, set_password)

    def check_password(self, password):
        return bcrypt.check_password_hash(self.encrypted_password, password)

    def __repr__(self):
        return "<User {}>".format(self.email)

    @login_manager.user_loader
    def load_user(id):
        print("User ID: ", id)
        return User.query.get(id)


class Work(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, nullable=False)
    street_number = db.Column(db.String(16))
    street = db.Column(db.String(64))
    city = db.Column(db.String(64))
    state = db.Column(db.String(64))
    zip = db.Column(db.String(64))
    lat = db.Column(db.Float)
    long = db.Column(db.Float)


class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, nullable=False)
    work_id = db.Column(db.Integer, nullable=False)
    arrival_datetime = db.Column(db.DateTime, nullable=False)
    departure_datetime = db.Column(db.DateTime, nullable=False)


class Carpool(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    accepted = db.Column(db.Boolean, nullable=False)
    driver_calendar_id = db.Column(db.Integer, nullable=False)
    passenger_calendar_id = db.Column(db.Integer, nullable=False)
    vehicle_id = db.Column(db.Integer)


class Vehicle(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    year = db.Column(db.Integer)
    make = db.Column(db.String(64))
    model = db.Column(db.String(64))


class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    commenter_id = db.Column(db.Integer, nullable=False)
    recipient_id = db.Column(db.Integer, nullable=False)
    carpool_id = db.Column(db.Integer)                  # If feedback refers to specific ride
    timestamp = db.Column(db.DateTime, nullable=False)  # Timestamp of Comment
    rating = db.Column(db.Integer)
    comments = db.Column(db.String(255))

