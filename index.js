var express = require('express');
var database = require('./database');

var app = express();

app.get('/', function (req, res) {
    res.send('Vivaa');
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set({'Content-Type': 'application/json'});
  next();
});

app.get('/physicians', function (req, res) {
    res.status(200)
    res.json(database.physicians);
});

app.get('/physicians/:physicianId/appointments', function (req, res) {
    res.status(200);
    const appts = database.appointments;
    const matchingAppts = appts.filter(({physicianId}) => physicianId == req.params.physicianId);
    res.json(matchingAppts);
});

if (!module.parent) {
    app.listen(4000);
    console.log('API Server started on port 4000');
}