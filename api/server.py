from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/hello', methods=['POST'])
def hello():
    message = request.get_json()
    message['message'] = 'Hello ' + message['name']
    return jsonify(message)

if __name__ == '__main__':
    app.run(debug=True)