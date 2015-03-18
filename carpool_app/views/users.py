from functools import wraps

from flask import session, Blueprint, url_for, request, redirect, flash
from .angular_view import authorize_user
from ..extensions import oauth


users = Blueprint("users", __name__)

facebook = oauth.remote_app('facebook',
                            base_url='https://graph.facebook.com/',
                            request_token_url=None,
                            access_token_url='/oauth/access_token',
                            authorize_url='https://www.facebook.com/dialog/oauth',
                            app_key="FACEBOOK",
                            request_token_params={'scope': 'email, public_profile'}
)


@facebook.tokengetter
def get_facebook_token(token=None):
    return session.get('facebook_token')


def require_login(view):
    @wraps(view)
    def decorated_view(*args, **kwargs):
        if 'facebook_token' in session:
            return view(*args, **kwargs)
        else:
            return redirect(url_for("users.login"))
    return decorated_view


@users.route("/facebook/login")
def facebook_login():
    session.pop('facebook_token', None)
    return facebook.authorize(callback=url_for('.facebook_authorized',
                                               _external=True,
                                               next=request.args.get('next')))


@users.route('/login/facebook/authorized', methods=["GET", "POST"])
def facebook_authorized():
    next_url = "http://media.cmgdigital.com/shared/img/photos/2013/05/17/ed/33/abc_-_CarIntoPoolF1.jpg"
    resp = facebook.authorized_response()
    if resp is None:
        flash('You denied the request to sign in.')
        return redirect(next_url)

    session['facebook_token'] = (resp['access_token'],)
    me = facebook.get('/me')
    session['facebook_name'] = me.data['first_name']
    print("\n\nYour name is", me.data['first_name'])
    for key in me.data.keys():
        print("{} = {}".format(key, me.data[key]))

    user = {"name": me.data['name'],
            "gender": me.data['gender'],
            "email": me.data['email'],
            "facebook_id": me.data['id']}
    flash('You were signed in as {}'.format(me.data['email']))
    return authorize_user(user)

