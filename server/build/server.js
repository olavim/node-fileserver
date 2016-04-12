'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dtree = require('./core/dtree');

var _dtree2 = _interopRequireDefault(_dtree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var sharePath = __dirname + '/../../share';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/files*', function (req, res) {
    var reqPath = req.originalUrl.substr(6);
    var path = sharePath + reqPath;

    (0, _dtree2.default)(path, function (err, data) {
        if (err) {
            console.log(err);
            res.send({
                error: 'No such file or directory: ' + reqPath
            });
            return;
        }

        res.send(data);
    });
});

app.listen(3000, function () {
    console.log("Server listening on port: 3000");
});
