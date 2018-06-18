var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/products', function (req, res) {
    res.render("products/list")
});

app.listen(3000, function () {
    console.log("server is runnning");
});