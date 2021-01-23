var express = require("express");
var app = express();

app.use(express.json());
app.use(express.static('public'))

var server = app.listen(8080, function(){
    console.log("Listening PORT: " + server.address().port);
});

// TODO: first party cookieとthird party cookieの2つを設定する
// third partyとなるサイトを仕込む必要がある