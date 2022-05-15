var mysql = require('mysql');


var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Coding@123',
    database: 'website'
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('databse connected');
});

module.exports = conn;