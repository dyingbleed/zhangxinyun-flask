from flask import render_template

from . import main

@main.route('/')
def index():
    return render_template("index.html", title=u"\u5f20\u99a8\u5141\u7684\u4e3b\u9875")