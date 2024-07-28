from flask import Flask, request, jsonify, send_from_directory
from graph import retrieve_directions
import sqlite3
import bcrypt
import os

app = Flask(__name__)


def initialize_database():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DB_PATH = os.path.join(BASE_DIR, 'store.db')

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    c.execute('''CREATE TABLE IF NOT EXISTS items
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT NOT NULL,
                 type TEXT NOT NULL,
                 image_name TEXT NOT NULL,
                 description TEXT NOT NULL,
                 price INTEGER NOT NULL
                 )''')

    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 username TEXT NOT NULL UNIQUE,
                 password_hash BLOB NOT NULL)''')

    c.execute('''CREATE TABLE IF NOT EXISTS cart
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                 user_id INTEGER,
                 item_id, INTEGER,
                 FOREIGN KEY (user_id) REFERENCES users(id),
                 FOREIGN KEY (item_id) REFERENCES items(id))''')

    conn.commit()
    conn.close()


initialize_database()


@app.route('/get_directions')
def get_directions():
    data = request.args
    start = data.get('start')
    end = data.get('end')

    path = retrieve_directions(start, end)
    return jsonify({"nodePath": path["nodePath"], "edgePath": path["edgePath"]}), 200


@app.route('/log_in', methods=['POST'])
def log_in():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    conn = sqlite3.connect('store.db')
    c = conn.cursor()

    c.execute("SELECT * FROM users WHERE username = ?", (username,))
    user = c.fetchone()

    # if no matches
    if user is None:
        conn.close()
        return jsonify({"message": "No username found"}), 400

    # verify password hash
    stored_password_hash = user[2]
    if not bcrypt.checkpw(password.encode('utf-8'), stored_password_hash):
        conn.close()
        return jsonify({"message": "Incorrect password"}), 400

    user_id = user[0]

    conn.close()
    return jsonify({"message": "User log in successful", "user_id": user_id}), 200


@app.route('/sign_up', methods=['POST'])
def sign_up():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    conn = sqlite3.connect('store.db')
    c = conn.cursor()

    # if username already exists
    c.execute("SELECT * FROM users WHERE username = ?", (username,))
    user = c.fetchone()
    if user is not None:
        conn.close()
        return jsonify({"message": "Username is already taken"}), 400

    # generate password hash
    password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    c.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", (username, password_hash))
    conn.commit()
    conn.close()

    return jsonify({"message": "User added successfully"}), 200


@app.route('/get_items')
def get_items():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DB_PATH = os.path.join(BASE_DIR, 'store.db')

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    c.execute("SELECT * FROM items")
    items = c.fetchall()

    c.close()

    items_list = []
    for item in items:
        items_list.append({
            "id": item[0],
            "name": item[1],
            "type": item[2],
            "image_name": item[3],
            "description": item[4],
            "price": item[5]
        })

    return jsonify({"items": items_list}), 200

@app.route('/images/<path:filename>')
def get_image(filename):
    return send_from_directory('images', filename)


if __name__ == '__main__':
    app.run()
