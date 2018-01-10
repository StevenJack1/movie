'use strict';

var _require = require('../../config/db'),
    sequelize = _require.sequelize,
    Sequelize = _require.Sequelize;
// var User = sequelize.import('../../models/User');

module.exports = {

    getInfo: function getInfo(req, res, next) {
        // 查
        res.render('User/allMovie', { title: 'ajax' });
    }
};
//# sourceMappingURL=allMovieController.js.map