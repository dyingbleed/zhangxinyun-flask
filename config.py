from os import path

import yaml

def init():
    global basedir
    basedir = path.abspath(path.dirname(__file__))

    global db_config
    db_yaml = open('config/db.yml')
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
    MONGO_HOST = db_config['host'] or '127.0.0.1'
    MONGO_DBNAME = db_config['dbname'] or 'dev'
        

config = {
    'development': DevelopmentConfig,
    'default': DevelopmentConfig
}