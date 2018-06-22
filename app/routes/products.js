module.exports = function (app) {

    var listProducts = function (req, res) {
        var connection = app.infra.connectionFactory();
        var productsDataBase = new app.infra.ProductsDAO(connection);

        productsDataBase.list(function (err, results) {
            res.format({
                html: function () {
                    res.render('products/list', {list: results});
                },
                json: function () {
                    res.json(results);
                }
            });
        });
        connection.end();
    }

    app.get('/products', listProducts);

    app.get('/products/form', function (req, res) {
       res.render('products/form', {validationErrors:{}, product:{}});
    });

    app.post('/products', function (req, res) {

        var product = req.body;
        req.assert('title', 'Title is required').notEmpty();
        req.assert('price', 'Price is invalid').isFloat();

        var errors = req.validationErrors();

        if(errors){
            res.format({
                html: function () {
                    res.status(400).render('products/form',{validationErrors:errors, product:product});
                },
                json:function(){
                    res.status(400).json(errors);
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);

        productsDAO.save(product, function (err, results) {
            res.redirect('/products');
        });

        connection.end();

    });
}
