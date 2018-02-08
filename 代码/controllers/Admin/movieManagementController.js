var { sequelize,Sequelize} = require('../../config/db');
var Movie = sequelize.import('../../models/Movie');

module.exports = {

	/**
	 * 返回电影分类页面
	 * @param req
	 * @param res
	 * @param next
	 */
	getInfo: function (req, res, next) {
		res.render("Admin/movieManagement");
	},
	/**
	 * 获得所有电影
	 * @param req
	 * @param res
	 * @param next
	 */
	getAll: function (req, res, next) {
		Movie.findAll({
			order: [
				['id','DESC']
			]
		}).then(function (result) {
			res.send(result);
		})
	},
	/**
	 * 添加电影信息
	 * @param req
	 * @param res
	 * @param next
	 */
	createMovie : function (req, res, next) {
		Movie.create({
			title: req.params.title,
			original_title: req.params.original_title,
			image: req.params.image,
			directors: req.params.directors,
			genres: req.params.genres,
			year: req.params.year,
			casts: req.params.casts
		}).then(function () {
			res.render("Admin/movieManagement");
		}).catch(next);
	},
	/**
	 * 删除电影
	 * @param req
	 * @param res
	 * @param next
	 */
	deleteById: function (req, res, next) {
		var movieInfoId = req.params.movieInfoId;
		Movie.destroy({
			where:{
				id:movieInfoId
			}
		}).then(function () {
			res.render("Admin/movieManagement");
		}).catch(next);
	}


};