var express = require('../config/express')();
var request = require('supertest')(express);
describe('#ProductsController', function () {

    beforeEach(function (done) {
        var connection = express.infra.connectionFactory();
        connection.query('delete from books', function (ex, result) {
            if(!ex){
                done();
            }
        });
    });

    it('#Products List Json', function (done) {
        request.get('/products').set('Accept', 'application/json')
            .expect('Content-Type', /json/).expect(200, done);
    });

    it('#Products List HTML', function (done) {
        request.get('/products').set('Accept', 'text/html')
            .expect('Content-Type', /html/).expect(200, done);
    });

    it('#Save invalid product', function (done) {
        request.post('/products').send({title:"",description:"some description"})
            .expect(400, done);
    });

    it('#Save valid product', function (done) {
        request.post('/products').send({title:"some title",description:"some description", price:200})
            .expect(302, done);
    });
});