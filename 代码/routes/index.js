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
	// 根据电影剧情和排序方式分类
	app.get('/allMovie/getInfo/:genere/:other',controllers.user.allMovieController.getAll);
	// API 根据剧情和电影名搜索
	app.get('/allMovie/getAllByGenereAndMovieRelatedInfo/:genere/:movieRelatedInfo',controllers.user.allMovieController.getAllByGenereAndMovieRelatedInfo);


    // API 电影详情页面
	app.get('/movieInfo/:movieInfoId',controllers.user.movieInfoController.getInfo);
	// 获取推荐电影列表
	app.get('/movieInfo/getRecommendMovieList/:movieInfoId',controllers.user.movieInfoController.getRecommendMovieList);



    /**
     *  ========================================================================
     *  后台
     *  ========================================================================
     */

	// 首页
	app.get('/admin',controllers.admin.adminInfoController.getInformation);



    // 获取电影页面
    app.get('/admin/movie',controllers.admin.movieManagementController.getInfo);
    // 获取电影信息列表
	app.get('/admin/movie/getAll',controllers.admin.movieManagementController.getAll);
	// 添加电影
	app.post('/admin/movie/createMovie/:title/:original_title/:image/:directors/:genres/:year/:casts',controllers.admin.movieManagementController.createMovie);
	// 删除电影
	app.get('/admin/movie/delete/:movieInfoId',controllers.admin.movieManagementController.deleteById);




	// 获取电影分类页面
	app.get('/admin/movieCategory',controllers.admin.movieCategoryManagementController.getInfo);
	// API 获取电影分类列表
	app.get('/admin/movieCategory/getMovieCategoryList',controllers.admin.movieCategoryManagementController.getMovieCategoryList);
	// 删除电影分类
	app.get('/admin/movieCategory/deleteById/:categoryId',controllers.admin.movieCategoryManagementController.deleteById);
	// 添加电影分类
	app.post('/admin/movieCategory/add/:category',controllers.admin.movieCategoryManagementController.addInfo);




};