var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('电影详情页面', function () {

	it('根据电影的id来获取电影信息', function (done) {
		var movieInfoId = 1;      // movie 的id
		request(app)
			.get('/movieInfo/' + movieInfoId)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

	it('获取当前电影相关的电影，实现推荐功能', function (done) {
		var movieInfoId = 1;      // movie 的id
		request(app)
			.get("/movieInfo/getRecommendMovieList/" + movieInfoId)
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});


});