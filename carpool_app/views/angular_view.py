import json
from flask import Blueprint, request, jsonify
from flask.ext.login import login_user, login_required, current_user
from ..extensions import db, login_manager
from ..schemas import UserSchema
from ..models import User

angular_view = Blueprint("angular_view", __name__, static_folder='../static')
api = Blueprint("api", __name__)

@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")

@api.route("/")
@login_required
def api_index():

    print("Current User:  ", current_user)
    return str(current_user.id)

@api.route("/users/", methods=['POST'])
def authorize_user(user_data):
    """
    This method will either create a new user and/or login the authorized
    user from facebook's OAuth
    :param user_data:
    :return: jsonified version of user
    """
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


