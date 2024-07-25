from flask import Flask, request, jsonify
from graph import retrieve_directions

app = Flask(__name__)


@app.route('/get_directions')
def get_directions():
    data = request.args
    start = data.get('start')
    end = data.get('end')

    path = retrieve_directions(start, end)

    return jsonify({"path": path}), 200


if __name__ == '__main__':
    app.run()
