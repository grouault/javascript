/**
 * Created by grouault on 16/08/2017.
 */
var express = require('express');
var peopleService = require('./services/people');
var app = express();

app.get('/', function (req, resp) {
  resp.send('Hello world');
});

app.get('/rest', function (req, resp) {
    var toReturn = {
        "key": "value",
        "nb": 49
    };
    resp.send(toReturn);
});

app.get('/people', function (req, resp) {
    resp.send(peopleService.getAll());
});

app.listen(3000, function () {
   console.log('Example app listening on port 3000');
});