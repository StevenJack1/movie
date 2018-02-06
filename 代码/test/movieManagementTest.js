var should = require('should');
var app = require('../app');
var request = require('supertest');

describe('电影管理页面', function () {

    it('返回电影分类页面', function (done) {
        request(app)
            .get('/admin/movie')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200)
            .end(function(err, res){
                if (err) throw err;
                should.exist(res.text);
                done();
            });
    });

    it('获得所有电影', function (done) {
        request(app)
            .get('/admin/movie/getAll')
            .expect(200)
            .end(function(err, res){
                if (err) throw err;
                should.exist(res.text);
                done();
            });
    });

    it('添加电影信息', function (done) {
        var title = "1";
        var original_title = "1";
        var image = "1";
        var directors = "1";
        var genres = "1";
        var year = 1992;
        var casts = "1";
        request(app)
            .post('/admin/movie/createMovie/' + title + "/" + original_title + "/" + image + "/"
                + directors + "/" + genres + "/" + year + "/" + casts)
            .expect(200)
            .end(function(err, res){
                if (err) throw err;
                should.exist(res.text);
                done();
            });
    });

    it('删除电影', function (done) {
        var movieInfoId = "";
        request(app)
            .get('/admin/movie/delete/' + movieInfoId)
            .expect(404)
            .end(function(err, res){
                if (err) throw err;
                should.exist(res.text);
                done();
            });
    });



});