from http.server import BaseHTTPRequestHandler, HTTPServer
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

print(rs)



"""

con.fetchmany(2)= it will bring starting 2 row of the query as a result.Here 2 is the size
con.fetchall()=it will bring all the rows of the query
con.fetchone()=it will bring first row of the query


"""



data = {"user2_proximity": 3, "Wifi_1": -80, "Wifi_2": -40, "Wifi_3": -40,
"thermostat": 18, "light": 0, "hour_of_day": 0, "user3_proximity": 3,
"user1_proximity": 1, "day_of_week": 1, "security": 0, "minute_of_hour": 9,
"Act_1": 1, "Act_2": 0, "Act_3": 0}

json_data = json.dumps(rs)
# HTTPRequestHandler class
class testHTTPServer_RequestHandler(BaseHTTPRequestHandler):

    # GET
    def do_GET(self):
        # Send response status code
        self.send_response(200)

        # Send headers

       # self.send_header ['Content-Type'] = 'application/json'
        #headers = {'Content-type': 'application/json'}
        #self.send_header('Content-type', 'text/html')
        self.headers = {'Content-type': 'application/json'}

        self.end_headers()

        # Send message back to client
        message = "Hello world!"
        # Write content as utf-8 data
        self.wfile.write(bytes(json_data, "utf8"))
        return


def run():
    print('starting server...')

    # Server settings
    # Choose port 8080, for port 80, which is normally used for a http server, you need root access
    server_address = ('127.0.0.1', 8082)
    httpd = HTTPServer(server_address, testHTTPServer_RequestHandler)
    print('running server...')
    httpd.serve_forever()


run()












