var http = require('http');

var configurations = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method: 'post',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};

var product = {
    title: 'this is a great book about node',
    price: '100',
    description: 'book description'
}

var request = http.request(configurations, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Body: '+body);
    });
});

request.end(JSON.stringify(product));