"""Add your views here.

We have started you with an initial blueprint. Add more as needed.
"""

from flask import Blueprint, flash


carpool_app = Blueprint("carpool_app", __name__)


@carpool_app.route("/")
def index():
    return "Hello, world!"


def flash_errors(form, category="warning"):
    '''Flash all errors for a form.'''
    for field, errors in form.errors.items():
        for error in errors:
            flash("{0} - {1}"
                    .format(getattr(form, field).label.text, error), category)

