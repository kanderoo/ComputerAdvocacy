# hello_world.py
from flask import Flask, render_template, request, send_file
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

if __name__ == '__main__': app.run(host='0.0.0.0',port='8080')
