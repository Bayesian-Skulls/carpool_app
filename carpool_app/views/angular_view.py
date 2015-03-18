from flask import Blueprint, request, redirect, flash, jsonify
from flask.ext.login import current_user, abort, login_user, logout_user, login_required
from ..models import User, Work, Vehicle
from ..schemas import WorkSchema, VehicleSchema
from ..extensions import oauth, db
from .users import users

angular_view = Blueprint("angular_view", __name__, static_folder='../static')
api = Blueprint("api", __name__)
work_schema = WorkSchema()
vehicle_schema = VehicleSchema()

@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")

@api.route("/")
def api_index():
    return "Hellowwww"


@users.route('/me', methods=["GET"])
def get_current_user():
    return current_user


@users.route('/users/<user_id>/work', methods=["POST"])
def add_work():
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


@users.route('/users/<user_id>/vehicle')
def add_vehicle():
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

