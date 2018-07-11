// import the ORM to create functions that will interact with the database. 
var orm = require('../config/orm.js')

var portfolio = {
    create: function (cols, vals, cb) {
        orm.insertOne('contact', cols, vals, function (res) {
            cb(res);
        });
    }
};

module.exports = portfolio;