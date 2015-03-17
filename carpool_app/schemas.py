from marshmallow import Schema, fields, ValidationError
from .models import User, Work


class UserSchema(Schema):
    name = fields.String(required=True)
    email = fields.Email(required=True)
    paypal = fields.String()
    drivers_license = fields.Integer()
    plate_number = fields.String()
    street_number = fields.String()
    street = fields.String()
    city = fields.String()
    state = fields.String()
    zip = fields.String()


class WorkSchema(Schema):
    name = fields.String(required=True)
    user_id = fields.Integer(required=True)
    street_number = fields.String()
    street = fields.String()
    city = fields.String()
    state = fields.String()
    zip = fields.String()


def legit_year(year):
    if not 1930 <= year <= 2016:
        raise ValidationError("Invalid Year")


def legit_rating(rating):
    if not 0 <= rating <= 5:
        raise ValidationError("Invalid Rating")


class VehicleSchema(Schema):
    year = fields.Integer(validate=legit_year)
    make = fields.String()
    model = fields.String()


class Feedback(Schema):
    rating = fields.Integer(validate=legit_rating)
    comments = fields.String()













