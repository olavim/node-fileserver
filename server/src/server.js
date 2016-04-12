import express from 'express';
import dtree from './core/dtree';
let app = express();

let sharePath = __dirname + '/../../share';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/files*', function(req, res) {
    let reqPath = req.originalUrl.substr(6);
    let path = sharePath + reqPath;

    dtree(path, (err, data) => {
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

app.listen(3000, function() {
    console.log("Server listening on port: 3000");
});