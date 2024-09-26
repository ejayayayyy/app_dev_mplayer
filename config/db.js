const mysql = require('mysql');

const db_connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music_player',
});

db_connect.connect((err) => {
    if (err) throw err;
    console.log("Database Connected.")
});

module.exports = db_connect;