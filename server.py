import tkinter as tk 
# hello_world.py
from flask import Flask, render_template, request, send_file
app = Flask(__name__)

data = []
name = []

tk = tk.Tk()
tk.title('Leaderboard')
tk.resizable(0,0)
leaderboard = Label(tk, text="boop")
leaderboard.pack()
tk.update()

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def handleData():
    pass



if __name__ == '__main__': app.run(host='0.0.0.0',port='8080')
