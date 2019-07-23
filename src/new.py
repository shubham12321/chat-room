
# import uuid
# from flask import Flask,request,abort,jsonify
# from datetime import datetime
# from flask_cors import CORS
# import json
# app = Flask(__name__)
# CORS(app)

# users=[]
# messages =  dict()
# chat=[]  #holds message id
# @app.route("/")
# def hello():
#     return "hello"

# @app.route("/login/",methods=['Get'])
# def login():
#     username = request.json.get("displayName",None)
#     if username is None or username in users:
#         abort(401)
#     else:
#         users.append(username)
#         return jsonify({
#             "status" : "ok",
#             "message" : "Successfully logged in",

#         })


# @app.route("/send/", methods=['Post'])
# def send():
#     username = request.json.get("displayName", None)
#     message = request.json.get("message", None)

#     if username is None or username not in users:
#         abort(401)

#     if message is None or message == "":
#         abort(400)
#     id = str(uuid.uuid4())

#     messages[id]={
#         'displayName' : username,
#         'message' : message,
#         'timestamp' :  datetime.now(),
#         'id' : id,
#     }

#     chat.append(id)
#     return jsonify(messages)


# @app.route("/get/<last_id>", methods=['Get'])
# def get(last_id):
#     if chat is None or len(chat)==0:
#         return []
#     index=get_next_index(last_id) if last_id else 0
#     ids_to_return = chat[index:]
#     results = map(lambda x: messages[x],ids_to_return)
#     return jsonify(list(results))

# @app.route("/updates/<last_id>", methods=['Get'])
# def updates(last_id):
#     index = get_next_index(last_id) if last_id else 0
#     result={
#         'new_messages' : False
#     }
#     if index < len(chat):
#         result['new_messages']=True
#     return jsonify(result)

# def get_next_index(last_id):
#     try:
#         return chat.index(last_id) + 1
#     except ValueError as e:
#         abort(400)



# if __name__ == '__main__':
#     app. run(debug=True)



import uuid
from flask import Flask,request,abort,jsonify
from datetime import datetime
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)

users=[]
messages =  dict()
chat=[]  #holds message id
@app.route("/")
def hello():
    return "hello"

@app.route("/login/",methods=['Post'])
def login():
    username = request.json.get("username",None)
    if username is None or username in users:
        abort(401)
    else:
        users.append(username)
        return jsonify({
            "status" : "ok",
            "message" : "Successfully logged in",

        })


@app.route("/send/", methods=['Post'])
def send():
    username = request.json.get("username", None)
    message = request.json.get("message", None)

    if username is None or username not in users:
        abort(401)

    if message is None or message == "":
        abort(400)
    id = str(uuid.uuid4())

    messages[id]={
        'username' : username,
        'message' : message,
        'timestamp' :  datetime.now(),
        'id' : id,
    }

    chat.append(id)
    return jsonify(messages)


@app.route("/get/<last_id>", methods=['Get'])
def get(last_id):
    if chat is None or len(chat)==0:
        return []
    index=get_next_index(last_id) if last_id else 0
    ids_to_return = chat[index:]
    results = map(lambda x: messages[x],ids_to_return)
    return jsonify(list(results))

@app.route("/updates/<last_id>", methods=['Get'])
def updates(last_id):
    index = get_next_index(last_id) if last_id else 0
    result={
        'new_messages' : False
    }
    if index < len(chat):
        result['new_messages']=True
    return jsonify(result)

def get_next_index(last_id):
    try:
        return chat.index(last_id) + 1
    except ValueError as e:
        abort(400)



if __name__ == '__main__':
    app.run(debug=True)
