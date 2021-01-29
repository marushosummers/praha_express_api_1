const express = require("express");
var request = require('request');

const app_first = express();

app_first.get('/', function(req, res, next) {
    request.post({ headers: {'content-type' : 'application/json'}
                , url: "https://5fc2865cfb8e.ngrok.io", body: '{"name": "hoge"}'}
                , function(error, response, body){
    console.log(body);
    });
});

app_first.listen(8080, function(){
    console.log("Listening PORT: 8080");
});

const app_third = express();

app_third.use(express.json())

app_third.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'hoge');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app_third.options('*', function (req, res) {
    res.sendStatus(200);
});

app_third.post('/', function(req, res) {
    if (req.is('application/json')) {
        res.status(201).send(req.body);
        console.log('POST OK');
    } else {
    const error = new Error('Invalid Content-Type');
    res.status(400).send({ error: error.message });
    }
});

app_third.listen(8081, function(){
    console.log("Listening PORT: 8081");
});