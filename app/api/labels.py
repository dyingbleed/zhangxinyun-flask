import json

from flask import request

from . import api
from .. import mongo

@api.route('/labels', methods=['GET'])
def query_labels():
    return '[{"text": "Baidu", "size": 5}, {"text": "Alibaba", "size": 9}, {"text": "Tencent", "size": 8}]'