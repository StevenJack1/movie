var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('电影类别页面', function () {

	it('API接口，返回电影分类列表', function (done) {
		request(app)
			.get('/admin/movieCategory/getMovieCategoryList')
            .set('Accept', 'application/json')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

	it('返回电影分类页面', function (done) {
		request(app)
			.get('/admin/movieCategory')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

	it('删除分类', function (done) {
		var categoryId = "";
		request(app)
			.get('/admin/movieCategory/deleteById/' + categoryId)
			.expect(404)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});

    it('添加电影分类', function (done) {
        var category = "爱情";
        request(app)
            .post('/admin/movieCategory/add/' + category)
			.set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
                if (err) throw err;
                should.exist(res.text);
                done();
            });
    });


});