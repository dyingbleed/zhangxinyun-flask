from flask import Flask, render_template, request
from flask.ext.pymongo import PyMongo

import json

app = Flask(__name__)
app.config["MONGO_HOST"] = "192.168.1.106"
app.config["MONGO_DBNAME"] = "infoq"

mongo = PyMongo(app)

@app.route('/')
def index():
    return render_template("index.html", title=u"\u5f20\u99a8\u5141\u7684\u4e3b\u9875")

@app.route('/data/<collection>')
def data_collection(collection):
    args = request.args
    cluster = args["cluster"]

    cursor = mongo.db[collection].find({'cluster': int(cluster)})

    data = []
    for item in cursor:
        if u'_id' in item:
            del item[u'_id']
        if item.has_key(u'title') and item.has_key(u'url') and item.has_key(u'x') and item.has_key(u'y') and item.has_key(u'cluster'):
            data.append(item)

    return json.dumps(data, ensure_ascii=False)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4000, debug=True)
