var { sequelize,Sequelize} = require('../../config/db');
var Movie = sequelize.import('../../models/Movie');

module.exports = {

	/**
	 * 渲染页面，并显示6条最新电影信息
	 */
    getInfo: function (req,res,next) {
	    Movie.findAll({
		    limit:6,
		    order: [
			    ['year','DESC']
		    ]
	    }).then(function (result) {
		    res.render('User/index',{result: result});
	    }).catch(next);
    },


    getMovieInfo: function (req,res,next) {
    	var genere = req.params.genere;
	    var sql = "select * from Movie where genres like '%"+genere+"%' ORDER BY rating DESC limit 0,6; ";
	    sequelize.query(sql).spread((result, metadata) => {
		    res.send(result);
	    });
    },

};