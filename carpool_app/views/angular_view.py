"""Add your views here.

We have started you with an initial blueprint. Add more as needed.
"""

from flask import Blueprint


angular_view = Blueprint("angular_view", __name__, static_folder='../static')


@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")


