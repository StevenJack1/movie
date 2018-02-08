var { sequelize,Sequelize} = require('../../config/db');
var Movie = sequelize.import('../../models/Movie');

module.exports = {

	/**
	 * 返回页面并根据Id返回数据
	 * @param req
	 * @param res
	 * @param next
	 */
    getInfo: function (req,res,next) {
	    var movieInfoId = req.params.movieInfoId;
	    Movie.findById(movieInfoId).then(function (result) {
		    res.render("User/movieInfo",{
		        id: result.id,
			    title: result.title,
			    original_title: result.original_title,
			    year: result.year,
			    image: result.image,
			    directors: result.directors,
			    casts: result.casts,
			    genres: result.genres,
			    alt: result.alt,
			    rating: result.rating,
		    });
	    })

    },
	/**
	 * 根据电影的id和剧情来获取推荐电影
	 * @param req
	 * @param res
	 * @param next
	 */
	getRecommendMovieList:function (req, res, next) {
		var movieInfoId = req.params.movieInfoId;
        Movie.findById(movieInfoId).then(function (result) {
            var genre = result.genres.split(",")[0];
	        var sql = "select * from movie where genres like '%"+genre+"%' order by rating desc limit 0,12; ";
	        sequelize.query(sql).spread((data, metadata) => {
		        res.send(data);
	        });
        })


    }

};