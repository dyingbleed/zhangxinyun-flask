import json

from flask import request

from . import api
from .. import mongo

@api.route('/labels', methods=['GET'])
def query_labels():
    query_result = [{'text': doc['text'], 'size': doc['size']} for doc in mongo.db.test.find()]
    return json.dumps(query_result, ensure_ascii=False, encoding='utf-8')