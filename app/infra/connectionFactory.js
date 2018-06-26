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

function createDBConnectionTest () {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'code_house',
        password : 'code_house',
        database : 'code_house_test'
    });
    return connection;
}

module.exports = function () {
    if(!process.env.NODE_ENV){
        return createDBConnection;
    }
    if(process.env.NODE_ENV == 'test'){
        return createDBConnectionTest;
    }
}
