import express from 'express';
import path from 'path';
var app = express();

let root = __dirname + '/../';
let staticPath = root + 'static';

app.get('/', (req, res) => {
    res.redirect('/home/');
});

app.get('/home*', function (request, response){
    response.sendFile(path.resolve(root, 'static', 'index.html'))
});

app.use('/scripts', express.static(staticPath + '/scripts'));

app.listen(8080, function() {
    console.log("Server listening on port: 8080");
});