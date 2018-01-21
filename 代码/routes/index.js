var controllers = require('../controllers');

module.exports = function (app) {
    /**
     *  ========================================================================
     *  前台
     *  ========================================================================
     */

    app.get('/',controllers.user.indexController.getInfo);
    app.get('/movieInfo',controllers.user.movieInfoController.getInfo);
    app.get('/allMovie',controllers.user.allMovieController.getInfo);

    app.post('/allMovie/movieList',controllers.user.allMovieController.movieList);
    app.get('/allMovie/movieList',controllers.user.allMovieController.movieList);

    //搜索电影
    app.post('/movieInfo/searchMovie', controllers.user.movieInfoController.searchMovie);
    /**
     *  ========================================================================
     *  后台
     *  ========================================================================
     */

    app.get('/admin/',controllers.admin.adminInfoController.getInformation);

    app.post('/admin/createInfo',controllers.admin.adminInfoController.createInfo);

    app.post('/admin/updateInfo',controllers.admin.adminInfoController.updateInfo);

    app.post('/admin/deleteInfo',controllers.admin.adminInfoController.deleteInfo)

    //根据电影分类显示电影
    // app.post('/allMovie',controllers.user.allMovieController.getInfo);

};