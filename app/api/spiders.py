import json
import uuid

from flask import request

from . import api
from .. import db, mongo
from ..models import Spider

def generate_uuid_id():
    return str(uuid.uuid4()).replace('-', '')

@api.route('/spiders', methods=['GET'])
def query_spiders():
    try:
        result = []
        spiders = Spider.query.all()
        for spider in spiders:
            result.append(spider.to_json())
        return json.dumps(result)
    except Exception, e:
        abort(500)
    

@api.route('/spiders', methods=['POST'])
def add_spiders():
    data = request.data
    spider = Spider.from_json(json.loads(data))
    spider.id = generate_uuid_id()
    db.session.add(spider)
    db.session.commit()
    return ''