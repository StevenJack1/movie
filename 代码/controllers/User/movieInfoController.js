var { sequelize,Sequelize} = require('../../config/db');
// var User = sequelize.import('../../models/User');

module.exports = {

    getInfo: function (req,res,next) {                      // 查
        res.render('User/movieInfo',{title: 'ajax'});
    }
};