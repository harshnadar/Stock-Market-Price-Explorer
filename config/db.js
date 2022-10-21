const mysql = require('mysql2/promise');

const dbConfig = require('./default');

async function pool() {
    const connection = await mysql.createConnection({
        user: dbConfig.DB_USER,
        host: dbConfig.DB_HOST,
        database: dbConfig.DB_NAME,
        password: dbConfig.DB_PASSWORD,
        port: dbConfig.DB_PORT
    });
    console.log('Connected to DB: ' + dbConfig.DB_NAME);
    return connection;
}

// const pool = 

// pool.connect((err) => {
//     if(err) throw err;
//     console.log('Connected to DB: ' + dbConfig.DB_NAME)
// });

module.exports = pool();