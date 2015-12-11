from . import db

class Spider(db.Model):

    __tablename__ = 'spiders'

    id = db.Column(db.String(32), primary_key=True)
    name = db.Column(db.String(64), unique=True)
    host = db.Column(db.String(64))
    port = db.Column(db.Integer)

    @staticmethod
    def from_json(json_obj):
        return Spider(name=json_obj['name'], host=json_obj['host'], port=int(json_obj['port']))

    def to_json(self):
        json_obj = {
            'id': self.id,
            'name': self.name,
            'host': self.host,
            'port': self.port
        }
        return json_obj

    def __repr__(self):
        return '<Spider %r>' % self.name