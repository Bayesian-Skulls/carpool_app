from flask import Blueprint


angular_view = Blueprint("angular_view", __name__, static_folder='../static')
api = Blueprint("api", __name__)

@angular_view.route("/")
def index():
    return angular_view.send_static_file("index.html")

def flash_errors(form, category="warning"):
    '''Flash all errors for a form.'''
    for field, errors in form.errors.items():
        for error in errors:
            flash("{0} - {1}"
                    .format(getattr(form, field).label.text, error), category)
