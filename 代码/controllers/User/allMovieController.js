var { sequelize,Sequelize} = require('../../config/db');
var Movie = sequelize.import('../../models/Movie');

module.exports = {

	/**
	 * 返回所有电影页面
	 * @param req
	 * @param res
	 * @param next
	 */
    getInfo: function (req,res,next) {                      // 查
        res.render("User/allMovie");
    },

	/**
	 * 根据排序方式和电影类别获取相关电影列表
	 * @param req
	 * @param res
	 * @param next
	 */
	getAll : function (req, res, next) {
		var genere = req.params.genere;
		var other = req.params.other;
		if (other == "year"){
			var sql = "select * from movie where genres like '%"+genere+"%' order by rating desc; ";
			sequelize.query(sql).spread((result, metadata) => {
				res.send(result);
			});
		} else if (other == "rating"){
			var sql = "select * from movie where genres like '%"+genere+"%' order by rating desc; ";
			sequelize.query(sql).spread((result, metadata) => {
				res.send(result);
			});
		} else {
			var sql = "select * from movie where genres like '%"+genere+"%';";
			sequelize.query(sql).spread((result, metadata) => {
				res.send(result);
			});
		}

	},
    /**
	 * 支持类别和电影名获取电影列表
     * @param req
     * @param res
     * @param next
     */
    getAllByGenereAndMovieRelatedInfo: function (req, res, next) {
        var genere = req.params.genere;
        var movieRelatedInfo = req.params.movieRelatedInfo;

        var sql = "select * from movie where genres like '%"+genere+"%' and title like '%"+ movieRelatedInfo +"%'; ";
        sequelize.query(sql).spread((result, metadata) => {
            res.send(result);
        });
    }
};
