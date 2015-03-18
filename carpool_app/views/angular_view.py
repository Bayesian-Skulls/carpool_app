import json
from flask import Blueprint, request, redirect, flash, jsonify
from flask.ext.login import current_user, abort, login_user, logout_user, login_required
from ..models import User, Work, Vehicle
from ..schemas import UserSchema, WorkSchema, VehicleSchema
from ..extensions import oauth, db


angular_view = Blueprint("angular_view", __name__, static_folder='../static')
api = Blueprint("api", __name__)
work_schema = WorkSchema()
vehicle_schema = VehicleSchema()

@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")

@api.route("/")
@login_required
def api_index():
    print("Current User:  ", current_user)
    return str(current_user.id)

@api.route("/users/", methods=['POST'])
def register_or_login_user(user_data):
    if not user_data:
        body = request.get_data(as_text=True)
        user_data = json.loads(body)
    errors = UserSchema().validate(user_data)
    if errors:
        return jsonify(errors), 400
    else:
        user = User(name=user_data['name'],
                    email=user_data['email'],
                    gender=user_data['gender'],
                    facebook_id=user_data['facebook_id'])
        if not User.query.filter_by(facebook_id=user_data['facebook_id']).first():
            db.session.add(user)
            db.session.commit()
    user = User.query.filter_by(facebook_id=user_data['facebook_id']).first()
    login_user(user)
    return jsonify({"user": user.to_dict()}), 201


@api.route('/me', methods=["GET"])
def get_current_user():
    return current_user


@api.route('/users/<user_id>/work', methods=["POST"])
@login_required
def add_work(user_id):
    print(request.get_json())
    if not request.get_json():
        return jsonify({"message": "No input data provided"}), 400
    input_data = request.get_json()
    errors = work_schema.validate(input_data)
    if errors:
        return jsonify(errors), 400
    work = Work(**input_data)
    db.session.add(work)
    db.session.commit()
    result = work_schema.dump(Work.query.get(work.id))
    return jsonify({"message": "Added work", "work": result.data}), 200


@api.route('/users/<user_id>/vehicle')
def add_vehicle(user_id):
    if not request.get_json():
        return jsonify({"message": "No input data provided"}), 400
    input_data = request.get_json()
    errors = vehicle_schema.validate(input_data)
    if errors:
        return jsonify(errors), 400
    vehicle = Vehicle(**input_data)
    db.session.add(vehicle)
    db.session.commit()
    result = work_schema.dump(Vehicle.query.get(vehicle.id))
    return jsonify({"message": "Added vehicle", "vehicle": result.data}), 200


