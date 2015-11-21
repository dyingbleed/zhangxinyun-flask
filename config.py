import yaml

# read db config from yaml file
db_yaml = open('config/db.yml')
db_config = yaml.safe_load(db_yaml)
db_yaml.close()

class Config:
    
    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG = True

    MONGO_HOST = db_config['host'] or '127.0.0.1'
    MONGO_DBNAME = db_config['dbname'] or 'dev'
        

config = {
    'development': DevelopmentConfig,
    'default': DevelopmentConfig
}