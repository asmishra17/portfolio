var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var app = express();

// serve static content for the app from the 'public' directory
app.use(express.static('public'));

// verify that this is everything for bodyParser
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

// var exphbs = require('express-handlebars');

var routes = require('./controllers/portfolioController.js');

app.use(routes);

app.listen(PORT, function() {
    console.log(`Server listening on: ${PORT}`)
});
