var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile = req.params.note;//nie wiem czy to jest dobrze

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    res.send(test.json);
});

fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
});

fs.writeFile('./test.json', stringifyFile, function(err) {
    If (err) throw err;
    console.log('file updated');
});


app.post('/updateNote/:note', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send(stringifyFile);
});

app.listen(3000);
