var app = require('./config/express')();
var productsRoute = require('./app/routes/products')(app);

app.listen(3000, function () {
    console.log("server is runnning");
});