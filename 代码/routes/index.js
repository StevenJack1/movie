var controllers = require('../controllers');

module.exports = function (app) {
    /**
     *  ========================================================================
     *  前台
     *  ========================================================================
     */

    // 首页
    app.get('/',controllers.user.indexController.getInfo);
    // 模糊查询电影分类信息
    app.get('/find/:genere',controllers.user.indexController.getMovieInfo);
    // 根据条件模糊查询电影
    app.get('/searchMovieList/:movieRelatedInfo',controllers.user.indexController.getMovieRelatedInfo);




    // 所有电影页面
	app.get('/allMovie',controllers.user.allMovieController.getInfo);
	app.get('/allMovie/getInfo/:genere/:other',controllers.user.allMovieController.getAll);


    // 电影详情页面
	app.get('/movieInfo/:movieInfoId',controllers.user.movieInfoController.getInfo);
	// 获取推荐电影列表
	app.get('/movieInfo/getRecommendMovieList/:movieInfoId',controllers.user.movieInfoController.getRecommendMovieList);



    /**
     *  ========================================================================
     *  后台
     *  ========================================================================
     */

    app.get('/admin/',controllers.admin.adminInfoController.getInformation);

    app.post('/admin/createInfo',controllers.admin.adminInfoController.createInfo);

    app.post('/admin/updateInfo',controllers.admin.adminInfoController.updateInfo);

    app.post('/admin/deleteInfo',controllers.admin.adminInfoController.deleteInfo);

    // 获取电影分类
	app.get('/admin/getMovieCategoryList',controllers.admin.movieCategoryController.getInfo);



};