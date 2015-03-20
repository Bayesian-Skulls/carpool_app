from marshmallow import Schema, fields, ValidationError
from .models import User, Work


class UserSchema(Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    email = fields.Email(required=True)
    gender = fields.String()
    paypal_id = fields.String()
    phone_number = fields.String()
    facebook_id = fields.String()
    drivers_license = fields.Integer()
    street_number = fields.String()
    street = fields.String()
    city = fields.String()
    state = fields.String()
    zip_code = fields.String()


class WorkSchema(Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    user_id = fields.Integer(required=True)
    street_number = fields.String()
    street = fields.String()
    city = fields.String()
    state = fields.String()
    zip_code = fields.String()


def legit_year(year):
    if not 1930 <= year <= 2016:
        raise ValidationError("Invalid Year")


def legit_rating(rating):
    if not 0 <= rating <= 5:
        raise ValidationError("Invalid Rating")


class VehicleSchema(Schema):
    year = fields.Integer(validate=legit_year)
    user_id = fields.Integer()
    make = fields.String()
    model = fields.String()
    plate_number = fields.String()


class Feedback(Schema):
    rating = fields.Integer(validate=legit_rating)
    comments = fields.String()


class CalendarSchema(Schema):
    date = fields.String()
    arrive_hour = fields.Integer()
    arrive_minutes = fields.Integer()
    depart_hour = fields.Integer()
    depart_minutes = fields.Integer()
