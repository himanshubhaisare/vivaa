var express = require('express');
var database = require('./database');

var app = express();

app.get('/', function (req, res) {
    res.send('Vivaa');
});

app.get('/physicians', function (req, res) {
    res.set({
        'Content-Type': 'application/json',
    });
    res.status(200)
    res.json(database.physicians);
});

app.get('/physicians/appointments', function (req, res) {
    res.set({
        'Content-Type': 'application/json',
    });
    res.status(200);
    res.json(database.appointments);
});

if (!module.parent) {
    app.listen(4000);
    console.log('API Server started on port 4000');
}