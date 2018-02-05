var { sequelize,Sequelize} = require('../../config/db');
var User = sequelize.import('../../models/User');

module.exports = {

    getInformation: function (req,res,next) {                      // 查
        res.render("Admin/index");
    },

};