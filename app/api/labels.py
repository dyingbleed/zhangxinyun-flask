import json

from flask import request

from . import api
from .. import mongo

@api.route('/labels', methods=['GET'])
def query_labels():
    query_result = [{'text': doc['text'], 'size': doc['size'], 'articles': doc['articles']} for doc in mongo.db.test.find()]
    return json.dumps(query_result, ensure_ascii=False, encoding='utf-8')

@api.route('/topics', methods=['GET'])
def query_topics():
	query_result = [{'name': doc['name'], 'x': doc['x'], 'y': doc['y'], 'z': doc['z'], 'terms': doc['terms']} for doc in mongo.db.topics.find()];
	return json.dumps(query_result, ensure_ascii=False, encoding='utf-8')