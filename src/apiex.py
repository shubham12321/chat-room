from flask import Flask, jsonify
from flask_cors import CORS

import json
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd=""
)

con=mydb.cursor();

#con.execute("Create database db1")

con.execute("use db1")

con.execute("insert into tbl(name,number) values('name1','123456789')")
#con.execute("insert into tbl(name,number) values('name2','789456123')")
#con.execute("insert into tbl(name,number) values('name3','111111111')")
mydb.commit()

#con.execute("delete from tbl where id>3")

#con.execute("select * from tbl where name like '%2'");

#con.execute("select * from tbl");

#con.execute("select name,id from tbl where id not between 2 and 4");
name1="name1"
con.execute("select * from tbl where name=%(name)s",{'name':name1});

rs=con.fetchall();
rs = json.dumps(dict(rs))
print(rs)


app = Flask(__name__)
CORS(app)



@app.route('/demo', methods=['GET'])
def get_tasks():
    return rs

if __name__ == '__main__':
    app.run(debug=True)