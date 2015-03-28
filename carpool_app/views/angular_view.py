import json
from datetime import datetime, timedelta
from flask import Blueprint, request, redirect, flash, jsonify, current_app
from flask.ext.login import current_user, abort, login_user, logout_user, login_required
from sqlalchemy import or_
from ..models import User, Work, Vehicle, Calendar, Carpool
from ..schemas import UserSchema, WorkSchema, VehicleSchema, CalendarSchema
from ..extensions import oauth, db

from ..tasks import build_carpools, get_rider_phone_numbers, send_confirm_email, user_money, get_gas_prices, get_directions, get_mpg, get_vehicle_api_id
from ..tasks import calculate_trip_cost, get_operands, get_total_carpool_cost




angular_view = Blueprint("angular_view", __name__, static_folder='../static')
api = Blueprint("api", __name__)
work_schema = WorkSchema()
vehicle_schema = VehicleSchema()
calendar_schema = CalendarSchema()


@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")


@api.route("/")
@login_required
def api_index():
    print("Current User:  ", current_user)
    return str(current_user.id)


@api.route("/user", methods=['POST'])
def register_or_login_user(data):
    if not data:
        data = request.get_json()
    errors = UserSchema().validate(data)
    if errors:
        return jsonify(errors), 400
    else:
        user = User.query.filter_by(facebook_id=data['facebook_id']).first()
        if user:
            login_user(user)
            return redirect("/#/dashboard", 302)
        else:
            user = User(**data)
            db.session.add(user)
            db.session.commit()
            user = User.query.filter_by(facebook_id=data['facebook_id']).first()
            login_user(user)
            return redirect("/#/register", 302)


@api.route("/user", methods=['PUT'])
@login_required
def update_user(user_id=None, data=None):
    if not user_id:
        user_id = current_user.id
    if not data:
        data = request.get_json()
    user = User.query.filter_by(id=user_id).first()
    if 'name' not in data:
        data['name'] = user.name
    if 'email' not in data:
        data['email'] = user.email
    for key in data.keys():
        try:
            setattr(user, key, data[key])
        except IOError:
            return jsonify({"ERROR": "Invalid Input Key: {}, Value: {}".format(key, data[key])}), 400
    db.session.commit()
    return jsonify({"user": user.to_dict()}), 201



@api.route('/me', methods=["GET"])
@login_required
def get_current_user():
    return jsonify({"user": current_user.to_dict()})


@api.route("/logout")
@login_required
def logout():
    user = User.query.filter_by(id=current_user.id).first()
    logout_user()
    return jsonify({"user": user.to_dict()}), 201


@api.route('/users/<user_id>/work', methods=["POST"])
# @login_required
def add_work(user_id=None, data=None):
    if not user_id:
        user_id = current_user.id
    if not data:
        if not request.get_json():
            return jsonify({"message": "No input data provided"}), 400
        data = request.get_json()
        errors = work_schema.validate(data)
        if errors:
            return jsonify(errors), 400
    data["user_id"] = user_id
    work = Work.query.filter_by(user_id=user_id).first()
    if work:
        for key in data.keys():
            try:
                setattr(work, key, data[key])
            except IOError:
                return jsonify({"ERROR": "Invalid Input Key: {}, Value: {}".format(key, data[key])}), 400
    else:
        work = Work(**data)
        db.session.add(work)
    db.session.commit()
    work = work.query.filter_by(user_id=user_id).first()
    result = work_schema.dump(Work.query.get(work.id))
    return jsonify({"message": "Added work", "work": result.data}), 200


@api.route('/user/vehicle', methods=["POST"])
# @login_required
def add_vehicle(user_id=None, data=None):
    if not user_id:
        user_id = current_user.id
    if not data:
        if not request.get_json():
            return jsonify({"message": "No input data provided"}), 400
        data = request.get_json()
        errors = vehicle_schema.validate(data)
        if errors:
            return jsonify(errors), 400
    data["user_id"] = user_id
    vehicle = Vehicle.query.filter_by(user_id=user_id).first()
    if vehicle:
        for key in data.keys():
            try:
                setattr(vehicle, key, data[key])
            except IOError:
                return jsonify({"ERROR": "Invalid Input Key: {}, Value: {}".format(key, data[key])}), 400
    else:
        vehicle = Vehicle(**data)
        db.session.add(vehicle)
    db.session.commit()
    vehicle = Vehicle.query.filter_by(user_id=user_id).first()
    result = vehicle_schema.dump(Vehicle.query.get(vehicle.id))
    return jsonify({"message": "Added vehicle", "vehicle": result.data}), 200


@api.route('/user/calendar', methods=["POST"])
# @login_required
def add_calendar(user_id=None, data=None):
    if not user_id:
        user_id = current_user.id
    if not data:
        if not request.get_json():
            return jsonify({"message": "No input data provided"}), 400
        data = request.get_json()
    errors = calendar_schema.validate(data)
    if errors:
        return jsonify(errors), 400
    arrive_dt = datetime.strptime(data["arrival_datetime"],
                                  "%Y-%m-%dT%H:%M:%S.%fZ")
    depart_dt = datetime.strptime(data["departure_datetime"],
                                  "%Y-%m-%dT%H:%M:%S.%fZ")
    user_calendars = Calendar.query.filter(Calendar.user_id==user_id,
        Calendar.work_id==data["work_id"]).all()
    for calendar in user_calendars:
        if calendar.arrival_datetime.date() == arrive_dt.date():
            calendar.arrival_datetime = arrive_dt
            calendar.departure_datetime = depart_dt
            db.session.commit()
            return jsonify({"message": "Updated calendar",
                            "calendar": calendar.to_dict()})
    new_calendar = Calendar(user_id=user_id,
                            work_id=data["work_id"],
                            arrival_datetime=arrive_dt,
                            departure_datetime=depart_dt)
    db.session.add(new_calendar)
    db.session.commit()
    return jsonify({"message": "Added calendar event",
                    "calendar": new_calendar.to_dict()})


@api.route('/user/calendar', methods=["GET"])
# @login_required
def view_calendars(user_id=None):
    if not user_id:
        user_id = current_user.id
    user_calendars = Calendar.query.filter(Calendar.user_id ==
                                           user_id).\
                                    filter(Calendar.arrival_datetime >=
                                           datetime.now()).all()
    user_calendars = [calendar.to_dict() for calendar in user_calendars]
    return jsonify({"calendars": user_calendars})


@api.route('/user/calendar/previous', methods=["GET"])
@login_required
def get_last_week_schedule(user_id=None):
    if not user_id:
        user_id = current_user.id
    today = datetime.today()
    start_td = timedelta(days=today.weekday()+7)
    end_td = timedelta(days=today.weekday())
    previous_calendars = Calendar.query.filter(Calendar.user_id == user_id).\
                                        filter(Calendar.arrival_datetime >=
                                               (today-start_td)).\
                                        filter(Calendar.arrival_datetime <=
                                               (today-end_td)).all()
    previous_calendars = [calendar.to_dict() for calendar
                          in previous_calendars]

    return jsonify({"calendars": previous_calendars})


@api.route('/users/work', methods=["GET"])
@login_required
def get_work():
    work = Work.query.filter_by(user_id=current_user.id)
    serializer = WorkSchema(many=True)
    result = serializer.dump(work)
    return jsonify({"work": result.data}), 200


@api.route('/user/vehicle', methods=["GET"])
@login_required
def get_vehicle():
    vehicle_list = []
    vehicles = Vehicle.query.filter_by(user_id=current_user.id).all()
    for vehicle in vehicles:
        vehicle_list.append(vehicle.to_dict())
    return jsonify({"vehicles": vehicle_list}), 200


@api.route('/user/calendar/<calendar_id>', methods=["DELETE"])
@login_required
def delete_calendar(calendar_id, user_id=None):
    if not user_id:
        user_id = current_user.id
    calendar = Calendar.query.get(calendar_id)
    db.session.delete(calendar)
    db.session.commit()
    return jsonify({"message": "Deleted calendar event"}), 200


# Delete work should delete all associated calendars
@api.route('/user/work/<work_id>', methods=["DELETE"])
@login_required
def delete_work(work_id, user_id=None):
    if not user_id:
        user_id = current_user.id
    calendars = Calendar.query.filter_by(user_id=user_id, work_id=work_id).all()
    for calendar in calendars:
        db.session.delete(calendar)
    work = Work.query.get(work_id)
    if work:
        db.session.delete(work)
        db.session.commit()
        return jsonify({"message": "Deleted work object"}), 200
    else:
        return jsonify({"message": "Work Object Not Found"})


@api.route('/user/vehicle/<vehicle_id>', methods=["DELETE"])
@login_required
def delete_vehicle(vehicle_id, user_id=None):
    if not user_id:
        user_id = current_user.id
    vehicle = Vehicle.query.get(vehicle_id)
    db.session.delete(vehicle)
    db.session.commit()
    return jsonify({"message": "Deleted vehicle object"}), 200


@api.route('/user/carpool', methods=["GET"])
#@login_required
def view_current_carpool(user_id=None):
    if not user_id:
        user_id = current_user.id
    current_carpool = Carpool.query.filter(or_ ((Carpool.driver_id == user_id),
                                          (Carpool.passenger_id == user_id))).\
                                          order_by(Carpool.id.desc()).first()

    return jsonify({"carpool": current_carpool.details})


@api.route('/vehicle/<driver_id>/mpg', methods=["GET"])
def get_combined_mpg(driver_id):
    return get_mpg(get_vehicle_api_id(driver_id=driver_id))


@api.route('/user/carpool', methods=["POST"])
# @login_required
def accept_decline_carpool(user_id=None):
    if not user_id:
        user_id = current_user.id
    if not request.get_json():
        return jsonify({"message": "No input data provided"}), 400
    data = request.get_json()
    current_carpool = Carpool.query.get_or_404(data["carpool_id"])
    if user_id == current_carpool.driver_id:
        current_carpool.driver_accepted = True if data["response"] else False
    elif user_id == current_carpool.passenger_id:
        current_carpool.passenger_accepted = True if\
            data["response"] else False
    db.session.commit()
    return jsonify({"carpool": current_carpool.details})


@api.route('/cost/')
@login_required
def get_user_cost():
    user_id = current_user.id
    return user_money(user_id)


@api.route('/<carpool_id>/carpool_cost')
def get_carpool_cost(carpool_id):
    return get_total_carpool_cost(carpool_id)



@api.route('/tests')
def test_function():
    return build_carpools()


@api.route('/<carpool_id>/phones', methods=["GET"])
def get_phone_numbers(carpool_id):
    return get_rider_phone_numbers(carpool=Carpool.query.get(carpool_id))


@api.route('/<user_id>/cost', methods=["GET"])
def test_cost(user_id):
    return calculate_trip_cost(*get_operands(*user_money(user_id)))


@api.route('/test2')
def test_email():
    return send_confirm_email([23])


@api.route('/test/user/<int:user_id>')
def login_test_user(user_id):
    user = User.query.get(user_id)
    if user:
        login_user(user)
        return jsonify({"user": user.to_dict()})
