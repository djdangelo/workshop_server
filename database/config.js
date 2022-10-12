const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('../models/keys');

const pool = mysql.createPool(database);

pool.getConnection( (err, conn) =>{
    if(err){
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            console.error('Lost connection to database');
        }
        if(err.code === "ER_CON_COUNT_ERROR"){
            console.error('Too many database connections');
        }
        if(err.code === "ECONNREFUSED"){
            console.error("Connection refused");
        }
    }
    if(conn) conn.release();
    console.log('Db connection successful');
});

pool.query = promisify(pool.query);
module.exports  = pool;