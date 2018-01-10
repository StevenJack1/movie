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


    /**
     *  ========================================================================
     *  前台
     *  ========================================================================
     */

    app.get('/admin/',controllers.admin.adminInfoController.getInformation);

    app.post('/admin/createInfo',controllers.admin.adminInfoController.createInfo);

    app.post('/admin/updateInfo',controllers.admin.adminInfoController.updateInfo);

    app.post('/admin/deleteInfo',controllers.admin.adminInfoController.deleteInfo)


};