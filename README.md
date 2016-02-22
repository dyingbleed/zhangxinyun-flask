# 毕业设计之数据可视化

## 简介

数据可视化服务

前端：

* jQuery
* Boostrap
* Vue.js
* D3
* D3 dispatch
* D3 cloud

后端：

* Flask
* Flask-Migrate
* Flask-PyMongo
* Flask-Script
* Flask-SQLAlchemy
* PyYAML

## 数据库配置

数据库配置文件 *conf/db.yml*

* *mongo_host* MongoDB 主机地址
* *mongo_dbname* MongoDB 数据库名

## 爬虫配置

爬虫配置文件 *conf/scrapy.yml*

* *scrapyd_host* Scrapyd 主机地址
* *scrapyd_port* Scrapyd 端口号
* *project* Scrapy 项目

## 启动

安装 Python 包管理器 *pip*：

    wget https://bootstrap.pypa.io/get-pip.py && sudo python get-pip.py
	
安装 Python 虚拟环境 *virtualenv*

    sudo pip install virtualenv

安装依赖包：

    pip install -r requirements.txt

运行：

    python manage.py runserver -h 0.0.0.0 -p 80
