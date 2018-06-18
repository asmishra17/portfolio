var express = require('express');
var router = express.Router();

// import the model
var portfolio = require('../models/portfolio.js');

// create all our routes
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

module.exports = router; 