module.exports = function (app) {
    app.get('/products', function (req, res) {

        var connection = app.infra.connectionFactory();
        var productsDataBase = new app.infra.ProductsDAO(connection);

        productsDataBase.list(function (err, results) {
            res.render('products/list', {list: results});
        });

        connection.end();

    });
}
