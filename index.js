var express = require('express')
var database = require('./database');

var app = express()

app.get('/', function (req, res) {
    res.send('Vivaa');
});

app.get('/physicians', function (req, res) {
    res.send(database.physicians);
});

app.get('/physicians/appointments', function (req, res) {
    res.send(database.appointments)
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}