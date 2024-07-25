from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/get_directions')
def get_directions():
    return

if __name__ == '__main__':
    app.run()
