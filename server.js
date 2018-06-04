var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;//nie wiem czy to jest dobrze
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {

    return fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send(req.params.note);
    stringifyFile = req.params.note;
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        console.log('file updated');
    });
});

app.listen(3000);
