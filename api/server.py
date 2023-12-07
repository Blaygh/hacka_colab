from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/hello', methods=['POST'])
def hello():
    message = 'Hello Joel'
    return jsonify(message)

@app.route('/bug', methods=['POST'])
def bug():
    message = "Why was the computer cold? It left its Windows open! But here's a classic tale for you: Did you hear about the first computer bug? It wasn't a pesky virus or a malware mosquito; it was literally a bug! Back in the ancient times of 1947, when computers wore lab coats, the Harvard Mark II had a glitch. Grace Hopper, the computer scientist, traced it back to an actual moth stuck in one of the relays. Talk about a bug causing a bug! They promptly removed it and documented the 'first actual case of bug being found.' I guess we can say that was the original computer 'hack'—courtesy of Mother Nature. Remember, when your code is acting buggy, it might just need a good swat... or a can of virtual insect repellent!"
    return jsonify(message)

if __name__ == '__main__':
    app.run(debug=True)