var { sequelize,Sequelize} = require('../../config/db');
var MovieCategory = sequelize.import('../../models/MovieCategory');

module.exports = {

	/**
	 * API接口，返回电影分类列表
	 * @param req
	 * @param res
	 * @param next
	 */
	getMovieCategoryList: function (req,res,next) {
		MovieCategory.findAll().then(function (result) {
			res.send(result);
		}).catch(next);
	},

	/**
	 * 返回电影分类页面
	 * @param req
	 * @param res
	 * @param next
	 */
	getInfo: function (req, res, next) {
		res.render("Admin/movieCategoryManagement");
	},
	/**
	 * 删除分类
	 */
	deleteById: function (req, res, next) {
		var categoryId = req.params.categoryId;
		MovieCategory.destroy({
			where:{
				id:categoryId
			}
		}).then(function () {
			res.render("Admin/movieCategoryManagement");
		}).catch(next);
	},
	/**
	 * 添加分类
	 * @param req
	 * @param res
	 * @param next
	 */
	addInfo: function (req, res, next) {
		MovieCategory.create({
			category: req.params.category
		}).then(function () {
			res.render("Admin/movieManagement");
		}).catch(next);
	}










};