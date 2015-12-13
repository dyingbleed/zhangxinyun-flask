import json
import uuid

from flask import request

from . import api
from .. import db, mongo
from ..models import SpiderTask, SpiderNode


def _generate_uuid_id():
    return str(uuid.uuid4()).replace('-', '')


@api.route('/spider/tasks', methods=['GET'])
def query_spider_tasks():
    try:
        result = []
        tasks = SpiderTask.query.all()
        for task in tasks:
            result.append(task.to_json())
        return json.dumps(result)
    except Exception, e:
        pass

@api.route('/spider/tasks', methods=['POST'])
def add_spider_task():
    data = request.data
    task = SpiderTask.from_json(json.loads(data))
    task.id = _generate_uuid_id()
    db.session.add(task)
    db.session.commit()
    return ''


@api.route('/spider/nodes', methods=['GET'])
def query_spider_nodes():
    try:
        result = []
        nodes = SpiderNode.query.all()
        for node in nodes:
            result.append(node.to_json())
        return json.dumps(result)
    except Exception, e:
        pass

@api.route('/spider/nodes', methods=['POST'])
def add_spider_node():
    data = request.data
    node = SpiderNode.from_json(json.loads(data))
    node.id = _generate_uuid_id()
    db.session.add(node)
    db.session.commit()
    return ''