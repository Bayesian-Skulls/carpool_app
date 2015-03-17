from flask import session, Blueprint, url_for, request, redirect, flash, render_template

from ..extensions import oauth



facebook = oauth.remote_app('facebook',
    base_url='https://graph.facebook.com/',
    request_token_url=None,
    access_token_url='/oauth/access_token',
    authorize_url='https://www.facebook.com/dialog/oauth',
    consumer_key="410559155795197",
    consumer_secret="f64f456e4558a27416c075b7b9446050",
    request_token_params={'scope': 'email'}
)


users = Blueprint("users", __name__)


#@users.route("/")
#def home():
#    return render_template("facebook.html")
