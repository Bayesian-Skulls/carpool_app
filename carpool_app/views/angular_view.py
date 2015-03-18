from flask import Blueprint


angular_view = Blueprint("angular_view", __name__, static_folder='../static')
api = Blueprint("api", __name__)

@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")


@api.route("/")
def api_index():
    return "Hellowwww"
