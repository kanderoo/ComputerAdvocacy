import tkinter as tk 
# hello_world.py
from flask import Flask, render_template, request, redirect, url_for
from tkinter import Label
#from PyZenity import InfoMessage
import json
app = Flask(__name__)

time = []
name = []
number = -1
numbers = []

textThing = ''

def updateLeaderboard():
   global textThing
   sortedTime, sortedName = zip(*sorted(zip(time, name))) 
   for i in range(len(sortedTime)):
       currentName = sortedName[i]
       currentTime = sortedTime[i]
       textThing += f"<br> Name: {currentName} Time: {currentTime}"
   
   print(sortedTime)
   print(sortedName)

@app.route('/leaderboard', methods=['GET'])
def leaderboard():
    return textThing

@app.route('/', methods=['GET', 'POST'])
def index():
	return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
        time.append(int(request.json.get("time")))
        name.append(request.json.get("name"))
        updateLeaderboard()
        return render_template('index.html')

app.run(threaded=True,host='0.0.0.0',port='8080')
