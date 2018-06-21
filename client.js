var http = require('http');

var configurations = {
  hostname: 'localhost',
    port: 3000,
    path: '/products',
    headers: {
        'Accept':'application/json'
    }
};

http.get(configurations, function (res) {
    res.on('data', function (body) {
        console.log('Body: '+body);
    });
});