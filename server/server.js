require('babel-register');
require("babel-polyfill");

var express = require('express');
var dirinfo = require('./src/core/dirinfo');
var filedata = require('./src/core/filedata');
var app = express();
var fl = require('./src/tools/file');

var sharePath = __dirname + '/../share';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://tilastojakelu.net:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/files*', function(req, res) {
	var filetype = fl.getFileType(sharePath + req.params[0]);
	if (filetype === 'directory') {
		dirinfo(sharePath, req.params[0]).then(function (data) {
			res.send(data);
		}).catch(function(err) {
			console.log(err);
			res.send({ error: 'No such file or directory: ' + req.params[0] });
		});
	} else {
		filedata(sharePath, req.params[0]).then(function (data) {
			res.send(data);
		}).catch(function(err) {
			console.log(err);
			res.send({ error: 'No such file or directory: ' + req.params[0] });
		});
	}
});

app.listen(3000, function() {
    console.log("Server listening on port: 3000");
});