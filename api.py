
# -*- coding: utf-8 -*-

import os
import requests
from flask import session, render_template, Blueprint, request, jsonify, abort,\
    current_app, redirect, url_for
from config import *
from flask import Flask, redirect, url_for

api = Flask(__name__)
api.secret_key = 'djfjsdkjXXS7979dfdfd'
@api.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template("index.html")

@api.route("/users", methods=['GET', 'POST'])
def admin():
    if request.method == 'GET':
        return render_template("admin.html")

@api.route("/auth/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        if 'assertion' not in request.form:
            abort(400)
        data = {'assertion': request.form['assertion'],
                'audience': APP_URL}
        resp = requests.post(PERSONA_VERIFIER_URL,
                             data=data, verify=True)

        if resp.ok:
            verification_data = resp.json()
        if verification_data['status'] == 'okay':
            if (verification_data['email'] in authorized_users):
                session['name'] = verification_data['email']
                return "ok"
            else:
                return "error"

@api.route('/auth/logout', methods=['POST'])
def logout_handler():
    session.pop('email', None)
    session.pop('name', None)
    session.pop('role', None)
    return "Ok"

if __name__ == "__main__":
    api.run(debug=True)
