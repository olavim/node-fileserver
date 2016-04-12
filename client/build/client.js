'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var root = __dirname + '/../';
var staticPath = root + 'static';

app.get('/', function (req, res) {
    res.redirect('/home/');
});

app.get('/home*', function (request, response) {
    response.sendFile(_path2.default.resolve(root, 'static', 'index.html'));
});

app.use('/scripts', _express2.default.static(staticPath + '/scripts'));

app.listen(8080, function () {
    console.log("Server listening on port: 8080");
});