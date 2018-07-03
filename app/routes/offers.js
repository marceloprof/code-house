module.exports = function (app) {
    app.get('/offers/form', function (req, res) {
        var connection = app.infra.connectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);

        productsDAO.list(function (err, results) {
            res.render('offers/form', {list:results});
        });
        connection.end();
    });

    app.post('/offers', function (req, res) {
       var offer = req.body;
       app.get('io').emit('newOffer', offer);
       res.redirect('offers/form');
    });
}