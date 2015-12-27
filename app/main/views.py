#coding:utf-8
from flask import render_template

from . import main

@main.route('/')
def index():
    return render_template("index.html", 
    	title=u"张馨允的论文", 
    	menus=[
    	{'title': u"数据采集", 'url': "/collect"},
    	{'title': u"数据处理", 'url': "/process"},
    	{'title': u"数据可视化", 'url': "/visualize"}
    	])