const connection = require('./connection.js');

module.exports = {
    insertOne: (tableInput, cols, vals, cb) => {
        const queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES ('${vals[0]}','${vals[1]}', '${vals[3]}')`
        connection.query(queryString, (err, result) => {

            if (err) {
                throw err;
            }

            cb(result);

        })
    }
};