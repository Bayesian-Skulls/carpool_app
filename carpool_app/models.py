from .extensions import db, login_manager, bcrypt
from flask.ext.login import UserMixin


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
        """encrypt user password"""
        self._password = password
        self.encrypted_password = bcrypt.generate_password_hash(password)

    password = property(get_password, set_password)

    def check_password(self, password):
        """verify password"""
        return bcrypt.check_password_hash(self.encrypted_password, password)

    def __repr__(self):
        return "<User {}>".format(self.email)

    def to_dict(self):
        """return user object as dictionary"""
        return {"id": self.id,
                "name": self.name,
                "email": self.email,
                "gender": self.gender,
                "phone_number": self.phone_number,
                "facebook_id": self.facebook_id,
                "paypal_id": self.paypal_id,
                "drivers_license": self.drivers_license,
                "street_number": self.street_number,
                "street": self.street,
                "city": self.city,
                "state": self.state,
                "zip_code": self.zip_code,
                "latitude": self.latitude,
                "longitude": self.longitude}


@login_manager.user_loader
def load_user(id):
    """return current user"""
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
        """return work object as dictionary"""
        return {"id": self.id,
                "name": self.name,
                "user_id": self.user_id,
                "street_number": self.street_number,
                "street": self.street,
                "city": self.city,
                "state": self.state,
                "zip_code": self.zip_code,
                "latitude": self.latitude,
                "longitude": self.longitude}


class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    work_id = db.Column(db.Integer, db.ForeignKey('work.id'), nullable=False)
    arrival_datetime = db.Column(db.DateTime, nullable=False)
    departure_datetime = db.Column(db.DateTime, nullable=False)

    def to_dict(self):
        """return calendar object as dictionary"""
        return {"id": self.id,
                "user_id": self.user_id,
                "work_id": self.work_id,
                "arrival_datetime": self.arrival_datetime.strftime(
                    "%Y-%m-%dT%H:%M:%S.%fZ"),
                "departure_datetime": self.departure_datetime.strftime(
                    "%Y-%m-%dT%H:%M:%S.%fZ")
                }


class Carpool(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    driver_accepted = db.Column(db.Boolean)
    passenger_accepted = db.Column(db.Boolean)
    driver_calendar_id = db.Column(db.Integer,
                                   db.ForeignKey('calendar.id'),
                                   nullable=False)
    passenger_calendar_id = db.Column(db.Integer, db.ForeignKey('calendar.id'),
                                      nullable=False)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.id'))
    driver_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    passenger_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    @property
    def users(self):
        """get users in this carpool"""
        user1 = Calendar.query.filter(
            Calendar.id == self.driver_calendar_id).first().user_id
        user2 = Calendar.query.filter(
            Calendar.id == self.passenger_calendar_id).first().user_id
        return [user1, user2]

    @property
    def details(self):
        """return all carpool data in a dictionary"""
        driver_arrival_time = Calendar.query.filter(
            Calendar.id == self.driver_calendar_id).first().arrival_datetime
        driver_depart_time = Calendar.query.filter(
            Calendar.id == self.driver_calendar_id).first().departure_datetime
        passenger_arrival_time = Calendar.query.filter(
            Calendar.id == self.passenger_calendar_id).first().arrival_datetime
        passenger_depart_time = Calendar.query.filter(
            Calendar.id == self.passenger_calendar_id).first().\
            departure_datetime
        driver = User.query.filter(User.id == self.driver_id).first().to_dict()
        driver_work = Work.query.filter(Work.user_id == self.driver_id).\
            first().to_dict()
        passenger = User.query.filter(User.id == self.passenger_id).\
            first().to_dict()
        passenger_work = Work.query.filter(Work.user_id == self.passenger_id).\
            first().to_dict()

        return {"carpool_id": self.id,
                "driver":
                {
                    "info": driver,
                    "work": driver_work,
                    "arrival": driver_arrival_time.strftime(
                        "%Y-%m-%dT%H:%M:%S.%fZ"),
                    "departure": driver_depart_time.strftime(
                        "%Y-%m-%dT%H:%M:%S.%fZ"),
                    "accepted": self.driver_accepted
                    },
                "passenger":
                    {
                    "info": passenger,
                    "work": passenger_work,
                    "arrival": passenger_arrival_time.strftime(
                        "%Y-%m-%dT%H:%M:%S.%fZ"),
                    "departure": passenger_depart_time.strftime(
                        "%Y-%m-%dT%H:%M:%S.%fZ"),
                    "accepted": self.passenger_accepted
                    }
                }

    def to_dict(self):
        """return carpool object as dictionary"""
        return {"id": self.id,
                "driver_accepted": self.driver_accepted,
                "passenger_accepted": self.passenger_accepted,
                "driver_calendar_id": self.driver_calendar_id,
                "passenger_calendar_id": self.passenger_calendar_id,
                "vehicle_id": self.vehicle_id,
                "driver_id": self.driver_id,
                "passenger_id": self.passenger_id
                }


class Vehicle(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    year = db.Column(db.Integer)
    make = db.Column(db.String(64))
    model = db.Column(db.String(64))
    plate_number = db.Column(db.String(16))

    def to_dict(self):
        """return vehicle object as dictionary"""
        return {"id": self.id,
                "user_id": self.user_id,
                "year": self.year,
                "make": self.make,
                "model": self.model,
                "plate_number": self.plate_number}


class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    commenter_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                             nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                             nullable=False)
    # If feedback refers to specific ride
    carpool_id = db.Column(db.Integer, db.ForeignKey('carpool.id'))
    # Timestamp of Comment
    timestamp = db.Column(db.DateTime, nullable=False)
    rating = db.Column(db.Integer)
    comments = db.Column(db.String(255))
