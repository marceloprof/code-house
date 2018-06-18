module.exports = function (app) {
    app.get('/products', function (req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'code_house',
            password : 'code_house',
            database : 'code_house'
        });

        connection.query('select * from books', function (err, results) {
            res.render('products/list', {list: results});
        });

        connection.end();

    });
}
