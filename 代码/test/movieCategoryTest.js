var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('电影分类页面', function () {

	it('获取电影类别的列表', function (done) {
		request(app)
			.get('/admin/getMovieCategoryList')
			.expect(200)
			.end(function(err, res){
				if (err) throw err;
				should.exist(res.text);
				done();
			});
	});




});