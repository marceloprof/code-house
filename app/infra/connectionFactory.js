var mysql = require('mysql');
function createDBConnection () {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'code_house',
        password : 'code_house',
        database : 'code_house'
    });
    return connection;
}

module.exports = function () {
    return createDBConnection;
}
