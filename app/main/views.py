#coding:utf-8
from flask import render_template

from . import main

@main.route('/')
def index():
    return render_template("index.html", 
    	title=u"热点技术挖掘系统", 
    	menus=[]
    )