const express = require("express");
var request = require('request');

const app_client = express();
app_client.use(express.json());
app_client.use(express.static('client'));

app_client.listen(8080, function(){
    console.log("Listening PORT: 8080");
});


const app_server = express();

app_server.use(express.json());

app_server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200)
    } else {
        next()
    }
});

app_server.post('/', function(req, res) {

    console.log('POST Reserved');
    console.log(req.body)
    res.status(201).send({"status": "OK"});
});

app_server.listen(8081, function(){
    console.log("Listening PORT: 8081");
});