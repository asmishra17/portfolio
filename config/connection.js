const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection (process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portfolio_db',
    })
}

connection.connect(function(err) {
    if (err) {
        console.error(`Error connection: ${err.stack}`);
        return;
    }

    console.log(`Connected as id ${err.stack}`);
})

module.exports = connection;