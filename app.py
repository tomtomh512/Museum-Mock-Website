from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/sign_up')
def sign_up():
    return


if __name__ == '__main__':
    app.run()
