var connection = require('./connection.js');

module.exports = {
    insertOne: function (tableInput, cols, vals, cb) {
        var queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES ("${vals[0]}", "${vals[1]}", "${vals[3]}", "${vals[4]}")`
        connection.query(queryString, function (err, result){
            
            if (err) {
                throw err;
            }

            cb(result);
        })
    }
}