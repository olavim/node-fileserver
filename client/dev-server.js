const express = require('express');
const path = require('path');
const config = require('./webpack.config.dev');
const webpack = require('webpack');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
    res.redirect('/home/');
});

app.get(/\/home$/, function(req, res) {
    res.redirect('/home/');
});

app.get('/home/*', function(request, response) {
    response.sendFile(path.join(config.output.path, 'index.dev.html'));
});

const port = 8888;
app.listen(port, function() {
    console.log("Server listening on port: " + port);
});