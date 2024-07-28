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
    return jsonify({"message": "User log in successful"}), 200


@app.route('/sign_up', methods=['POST'])
def sign_up():
    return jsonify({"message": "User added successfully"}), 200


@app.route('/get_items')
def get_items():
    data = request.args
    clothing = data.get('clothing')
    home_decor = data.get('home_decor')
    accessories = data.get('accessories')
    sortMethod = data.get('sortMethod')

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DB_PATH = os.path.join(BASE_DIR, 'store.db')

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    query = "SELECT * FROM items "
    params = []

    if clothing == 'true':
        params.append("type = 'clothing'")
    if home_decor == 'true':
        params.append("type = 'home_decor'")
    if accessories == 'true':
        params.append("type = 'accessories'")

    if params:
        query += " WHERE " + " OR ".join(params)

    sort_mapping = {
        'Name (A to Z)': 'ORDER BY name ASC',
        'Name (Z to A)': 'ORDER BY name DESC',
        'Price (Low to High)': 'ORDER BY price ASC',
        'Price (High to Low)': 'ORDER BY price DESC'
    }

    if sortMethod in sort_mapping:
        query += sort_mapping[sortMethod]

    c.execute(query)
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
