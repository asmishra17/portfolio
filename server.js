const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// serve static content from the public directory
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./controllers/portfolioController.js');

routes(app);

app.listen(PORT, function() {
    console.log(`Server listening on: ${PORT}`)
});
