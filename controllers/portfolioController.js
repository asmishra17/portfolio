const express = require('express');
const path = require('path');

// import the model to use its database functions
var portfolio = require('../models/portfolio.js');

module.exports = (app) => {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    });

    app.get('/contact.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../views/contact.html')) 
    });

    app.get('/portfolio.html', function(req, res) {
        res.sendFile(path.join(__dirname, '../views/portfolio.html'))
    });
};