const express = require("express");

const app_first = express();
app_first.use(express.static('first-party', {
    setHeaders: (res, path, stat) => {
        res.cookie('first-paty', 'cookie');
    },
}));
app_first.listen(8080, function(){
    console.log("Listening PORT: 8080");
});

const app_third = express();
app_third.use(express.static('third-party', {
    setHeaders: (res, path, stat) => {
        res.cookie('third-paty', 'cookie', {
            sameSite: 'none',
            secure: true,
        });
    },
}));
app_third.listen(8081, function(){
    console.log("Listening PORT: 8081");
});