from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def root():
    url_for('static', filename='css/skeleton/skeleton.css')
    url_for('static', filename='css/index.css')
    url_for('static', filename='js/index.js')
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
