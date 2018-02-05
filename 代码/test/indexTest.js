var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('首页测试', function () {

	it('首页信息显示测试', function (done) {
		request(app)
			.get('/')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

	it('根据类型关键字获取电影信息', function (done) {
		var genere = "剧情";            // 可以换成爱情/犯罪/喜剧 等等
		request(app)
			.get("/find/" + genere)
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

	it('根据电影名或导演名或演员名获取电影信息列表', function (done) {
		var movieRelatedInfo = "伊万";            // 可以换成任意导演或演员或电影名称 等等
		request(app)
			.get("/searchMovieList/" + movieRelatedInfo)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				done();
			});
	});

});