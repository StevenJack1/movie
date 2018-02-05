var { sequelize,Sequelize} = require('../../config/db');
var MovieCategory = sequelize.import('../../models/MovieCategory');

module.exports = {

	/**
	 * API接口，返回电影分类列表
	 * @param req
	 * @param res
	 * @param next
	 */
	getInfo: function (req,res,next) {
		MovieCategory.findAll().then(function (result) {
			res.send(result);
		}).catch(next);
	},








};