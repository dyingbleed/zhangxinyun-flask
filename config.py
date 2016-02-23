from os import path

import yaml

def init():
    global basedir
    basedir = path.abspath(path.dirname(__file__))

    global db_config
    db_yaml = open('conf/db.yml')
    db_config = yaml.safe_load(db_yaml)
    db_yaml.close()

init()

class Config:
    
    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG = True

    ## SQLAlchemy
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + path.join(basedir, 'data', 'data.sqlite')
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True

    ## PyMongo
    MONGO_HOST = db_config['mongo_host'] or '127.0.0.1'
    MONGO_DBNAME = db_config['mongo_dbname'] or 'dev'
    MONGO_USERNAME = db_config['mongo_username'] or 'root'
    MONGO_PASSWORD = db_config['mongo_password'] or '1'

config = {
    'development': DevelopmentConfig,
    'default': DevelopmentConfig
}
