var { sequelize,Sequelize} = require('../../config/db');
var Movie = sequelize.import('../../models/Movie');
var _       = require('lodash');            //_.pick导入
var marked = require('marked');             //_.pick导入

module.exports = {

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

	getRecommendMovieList:function (req, res, next) {
		var movieInfoId = req.params.movieInfoId;
        Movie.findById(movieInfoId).then(function (result) {
            var genre = result.genres.split(",")[0];
	        var sql = "select * from Movie where genres like '%"+genre+"%' ORDER BY rating DESC limit 0,12; ";
	        sequelize.query(sql).spread((data, metadata) => {
		        res.send(data);
	        });
        })


    }

};