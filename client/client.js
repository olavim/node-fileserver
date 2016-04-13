var express = require('express');
var path = require('path');
var config = require('./config');
var app = express();

app.get('/', function(req, res) {
    res.redirect('/home/');
});

app.get('/home*', function(request, response) {
    response.sendFile(config.webDir + '/index.html');
});

app.use('/scripts', express.static(config.webDir + '/scripts'));

app.listen(config.port, function() {
    console.log("Server listening on port: " + config.port);
});