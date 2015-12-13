from . import db

class SpiderTask(db.Model):

    __tablename__ = 'spider_tasks'

    id = db.Column(db.String(32), primary_key=True)
    name = db.Column(db.String(64), unique=True)
    description = db.Column(db.String(256))
    node_id = db.Column(db.String(32), db.ForeignKey('spider_nodes.id'))
    project = db.Column(db.String(32), nullable=False)
    spider = db.Column(db.String(32), nullable=False)

    @staticmethod
    def from_json(json_obj):
        return SpiderTask(name=json_obj['name'],
            description=json_obj['description'], 
            node_id=json_obj['node_id'],
            project=json_obj['project'],
            spider=json_obj['spider'])

    def to_json(self):
        json_obj = {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'node_id': self.node_id,
            'project': self.project,
            'spider': self.spider
        }
        return json_obj

    def __repr__(self):
        return '<SpiderTask %r>' % self.name

class SpiderNode(db.Model):

    __tablename__ = 'spider_nodes'

    id = db.Column(db.String(32), primary_key=True)
    name = db.Column(db.String(64), unique=True)
    host = db.Column(db.String(64))
    port = db.Column(db.Integer)

    tasks = db.relationship('SpiderTask', backref='node')

    @staticmethod
    def from_json(json_obj):
        return SpiderNode(name=json_obj['name'], host=json_obj['host'], port=int(json_obj['port']))

    def to_json(self):
        json_obj = {
            'id': self.id,
            'name': self.name,
            'host': self.host,
            'port': self.port
        }
        return json_obj

    def __repr__(self):
        return '<SpiderNode %r>' % self.name