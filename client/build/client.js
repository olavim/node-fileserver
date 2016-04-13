'use strict';

var express = require('express');
var path = require('path');
var config = require('../config');
var app = express();

var root = __dirname + '/../';
var staticPath = root + 'static';

app.get('/', function (req, res) {
    res.redirect('/home/');
});

app.get('/home*', function (request, response) {
    response.sendFile(path.resolve(root, 'static', 'index.html'));
});

app.use('/scripts', express.static(staticPath + '/scripts'));

app.listen(config.port, function () {
    console.log("Server listening on port: " + config.port);
});