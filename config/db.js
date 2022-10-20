const mysql = require('mysql2');

const dbConfig = require('./default');

const pool = mysql.createConnection({
    user: dbConfig.DB_USER,
    host: dbConfig.DB_HOST,
    database: dbConfig.DB_NAME,
    password: dbConfig.DB_PASSWORD,
    port: dbConfig.DB_PORT
});

pool.connect((err) => {
    if(err) throw err;
    console.log('Connected to DB: ' + dbConfig.DB_NAME)
});

module.exports = pool;