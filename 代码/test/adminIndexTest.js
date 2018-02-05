var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('后台首页', function () {

	it('显示测试', function (done) {
		request(app)
			.get('/admin')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});




});