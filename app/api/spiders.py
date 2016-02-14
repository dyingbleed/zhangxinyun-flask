from urllib import urlencode
from urllib2 import urlopen
import json

from flask import request
import yaml

from . import api

def init():
    yaml_file = open('conf/scrapy.yml')
    scrapy_config = yaml.safe_load(yaml_file)
    yaml_file.close()

    global host, port, project
    host = scrapy_config['scrapyd_host'] or '127.0.0.1'
    port = scrapy_config['scrapyd_port'] or 6800
    project = scrapy_config['project'] or 'default'

init()

@api.route('/spiders', methods=['GET'])
def query_spiders():
    spiders = []

    list_spiders_response = urlopen('http://{}:{}/listspiders.json?project={}'.format(host, str(port), project))
    list_spiders_dict = json.load(list_spiders_response)
    list_jobs_response = urlopen('http://{}:{}/listjobs.json?project={}'.format(host, str(port), project))
    list_jobs_dict = json.load(list_jobs_response)

    if 'ok' == list_spiders_dict['status']:
        spiders = [{'name': spider} for spider in list_spiders_dict['spiders']]

    if 'ok' == list_jobs_dict['status']:
        pending = [item['spider'] for item in list_jobs_dict['pending']]
        running = [item['spider'] for item in list_jobs_dict['running']]
        finished = [item['spider'] for item in list_jobs_dict['finished']]

        for i in range(len(spiders)):
            name = spiders[i]['name']
            if name in pending:
                spiders[i]['status'] = 'pending'
            elif name in running:
                spiders[i]['status'] = 'running'
            elif name in finished:
                spiders[i]['status'] = 'finished'
            else:
                spiders[i]['status'] = 'none'

    return json.dumps(spiders)

@api.route('/spiders', methods=['POST'])
def startup_spiders():
    spiders = json.loads(request.get_data())

    for spider in spiders:
        data = [('project', project), ('spider', spider)]
        urlopen('http://{}:{}/schedule.json'.format(host, str(port)), urlencode(data))
    
    return '';
