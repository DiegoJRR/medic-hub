import time
from flask import Flask, request, jsonify, abort
import psycopg2
from config import config


app = Flask(__name__)

def queryDB(query):
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # read connection parameters
        params = config()

        # connect to the PostgreSQL server
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)
        
        # create a cursor
        cur = conn.cursor()
        
        response = cur.execute(query)

        results = cur.fetchall() 

        return results
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')
            

@app.route('/MakersList', methods=['GET'])
def get_makers_list():

    if request.json:
        query = "SELECT *, ST_Distance(ST_PointFromText('POINT(-100.316116 25.686613)', 4326), geom) \
            FROM MAKERS WHERE ID IN  (SELECT DISTINCT MAKER_ID FROM MAKERS_PRINTERS WHERE PRINTER_ID IN \
                (SELECT PRINTER_ID FROM PRINTERS_MATERIALS WHERE MATERIAL_ID = \
                    (SELECT MATERIAL_ID FROM MATERIALS WHERE MATERIAL_NAME = 'PLA')));"

        results = queryDB(query)
        print(results)

        return jsonify(results[0])