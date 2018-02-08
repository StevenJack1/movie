var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('所有电影页面', function () {

	it('初始进入页面，显示测试', function (done) {
		request(app)
			.get('/allMovie')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

	it('选择类型关键字和排序方式来显示电影信息', function (done) {
		var genere = "剧情";            // 可以换成爱情/犯罪/喜剧 等等
		var other = "rating";            // 可以是按评分排序(rating),也可以是按时间排序(year)
		request(app)
			.get("/allMovie/getInfo/" + genere + "/" + other)
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

    it('选择类型和电影名获取电影列表', function (done) {
        var genere = "剧情";            // 可以换成爱情/犯罪/喜剧 等等
        var movieRelatedInfo = "肖";
        request(app)
            .get("/allMovie/getAllByGenereAndMovieRelatedInfo/" + genere + "/" + movieRelatedInfo)
            .expect(200)
            .end(function(err, res){
                if (err) throw err;
                should.exist(res.text);
                done();
            });
    });
});