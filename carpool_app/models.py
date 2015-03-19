from .extensions import db, login_manager, bcrypt
from flask.ext.login import UserMixin

from datetime import datetime


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    gender = db.Column(db.String(64), nullable=False)
    phone_number = db.Column(db.String(64))
    encrypted_password = db.Column(db.String(60))
    facebook_id = db.Column(db.String(64))
    paypal_id = db.Column(db.String(64))
    drivers_license = db.Column(db.Integer)
    street_number = db.Column(db.String(16))
    street = db.Column(db.String(64))
    city = db.Column(db.String(64))
    state = db.Column(db.String(64))
    zip_code = db.Column(db.String(64))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)

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

    def to_dict(self):
        return {"id": self.id,
                "name": self.name,
                "email": self.email,
                "gender": self.gender,
                "facebook_id": self.facebook_id,
                "paypal_id": self.paypal_id,
                "drivers_license": self.drivers_license,
                "plate_number": self.plate_number,
                "street_number": self.street_number,
                "street": self.street,
                "city": self.city,
                "state": self.state,
                "zip_code": self.zip_code}

@login_manager.user_loader
def load_user(id):
    return User.query.get(id)

class Work(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    street_number = db.Column(db.String(16))
    street = db.Column(db.String(64))
    city = db.Column(db.String(64))
    state = db.Column(db.String(64))
    zip_code = db.Column(db.String(64))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)

    def to_dict(self):
        return {"street_number": self.street_number,
                "street": self.street,
                "city": self.city,
                "state": self.state,
                "zip_code": self.zip_code}


class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    work_id = db.Column(db.Integer, db.ForeignKey('work.id'), nullable=False)
    arrival_datetime = db.Column(db.DateTime, nullable=False)
    departure_datetime = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        return {"id": self.id,
                "user_id": self.user_id,
                "work_id": self.work_id,
                "arrival_datetime": self.arrival_datetime,
                "departure_datetime": self.departure_datetime}


class Carpool(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    accepted = db.Column(db.Boolean, nullable=False)
    driver_calendar_id = db.Column(db.Integer, db.ForeignKey('calendar.id'), nullable=False)
    passenger_calendar_id = db.Column(db.Integer, db.ForeignKey('calendar.id'), nullable=False)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.id'))


class Vehicle(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    year = db.Column(db.Integer)
    make = db.Column(db.String(64))
    model = db.Column(db.String(64))
    plate_number = db.Column(db.String(16))


    def to_dict(self):
        return {"year": self.year,
                "make": self.make,
                "model": self.model}


class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    commenter_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    carpool_id = db.Column(db.Integer, db.ForeignKey('carpool.id'))  # If feedback refers to specific ride
    timestamp = db.Column(db.DateTime, nullable=False)  # Timestamp of Comment
    rating = db.Column(db.Integer)
    comments = db.Column(db.String(255))
