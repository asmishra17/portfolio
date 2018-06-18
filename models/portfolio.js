var orm = require('../config/orm.js');

var portfolio = {
    create: function (cols, vals, cb) {
        orm.insertOne('contacts', cols, vals, function (res) {
            cb(res);
        })
    }
};

module.exports = portfolio;