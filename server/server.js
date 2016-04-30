require('babel-register');
require("babel-polyfill");

var config = require('./config');
var express = require('express');
var HttpStatus = require('http-status-codes');
var dirinfo = require('./src/core/dirinfo');
var filedata = require('./src/core/filedata');
var app = express();
var fl = require('./src/tools/file');

var share = config.sharePath;

function error(res, code, msg) {
	res.status(code).json({status: code, error: msg});
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://tilastojakelu.net:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/files*', function(req, res) {
	var fullPath = share + req.params[0];
	var filetype = fl.getFileType(fullPath);

	if (filetype === 'directory') {
		dirinfo(share, req.params[0]).then(function(data) {
			res.send(data);
		}).catch(function(err) {
			error(res, HttpStatus.NOT_FOUND, err.message);
		});
	} else {
		filedata(fullPath).then(function(data) {
			res.send(data);
		}).catch(function(err) {
			error(res, HttpStatus.NOT_FOUND, err.message);
		});
	}
});

app.post('/files*', function(req, res) {
	var fullPath = share + req.params[0];
	var name = req.query.dir;

	if (fl.isValidFilename(name)) {
		fl.mkdir(fullPath, name).then(function () {
			res.status(HttpStatus.CREATED).end();
		}).catch(function (err) {
			console.log(err)
			error(res, HttpStatus.CONFLICT, err.message);
		});
	} else {
		error(res, HttpStatus.BAD_REQUEST, 'Illegal filename.');
	}
});

app.listen(3000, function() {
    console.log("Server listening on port: 3000");
});