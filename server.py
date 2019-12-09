# hello_world.py
from flask import Flask, render_template, request, redirect, url_for
import json
app = Flask(__name__)

time = []
name = []

@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    return render_template("leaderboard.html", data=json.dumps(sorted(zip(time,name))))

@app.route('/', methods=['GET', 'POST'])
def index():
	return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
        time.append(int(request.json.get("time")))
        name.append(request.json.get("name"))
        return "true" 

app.run(threaded=True,host='0.0.0.0',port='8080')
