const express = require('express');
const path = require('path');

module.exports = (app) => {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    });

};