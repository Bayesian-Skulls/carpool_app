import json
from flask import Blueprint, request, jsonify
from ..extensions import db
from ..schemas import UserSchema
from ..models import User

angular_view = Blueprint("angular_view", __name__, static_folder='../static')
api = Blueprint("api", __name__)

@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")


@api.route("/")
def api_index():
    return "Hellowwww"

@api.route("/users/", methods=['POST'])
def create_user(user_data):
    print(user_data)
    if not user_data:
        body = request.get_data(as_text=True)
        user_data = json.loads(body)

    errors = UserSchema().validate(user_data)
    if errors:
        return jsonify(errors), 400
    else:
        facebook_id = "FB-{}".format(user_data['facebook_id'])
        user = User(name=user_data['name'],
                    email=user_data['email'],
                    gender=user_data['gender'],
                    facebook_id=user_data['facebook_id'])
        if not User.query.filter_by(facebook_id=facebook_id).first():
            db.session.add(user)
            db.session.commit()
            return jsonify({"user": user.to_dict() }), 201
        else:
            return jsonify({"ERROR": "Account already exists."})





