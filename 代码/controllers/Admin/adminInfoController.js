var { sequelize,Sequelize} = require('../../config/db');
var User = sequelize.import('../../models/User');

module.exports = {

    getInformation: function (req,res,next) {                      // 查
        User.findById('yanzefan').then(function (result) {
            res.render('Admin/index',{
                name: result.name,
                phoneNumber: result.phoneNumber,
                sex: result.sex
            })
        }).catch(next);
    },

    createInfo:function (req,res,next) {              // 创建
        User.create({
            userName: 'gaoyuyue',
            name: '高语越',
            phoneNumber: '158222',
            sex: true,
            isDelete: true,
            password: 'asdasdsadasd',
            role: 'user'
        }).then(function (result) {
            res.json({
               status:1,
               data:result
            });
        }).catch(next);
    },

    updateInfo: function (req, res, next) {               // 修改
        var data = {
            userName: 'gaoyuyue',
            name: '高语越',
            phoneNumber: '12554122',
            sex: true,
            isDelete: true,
            password: 'asdasdsadasd',
            role: 'user'
        };
        User.update(data,{
            where:{
                userName:data.userName
            }
        }).then(function (result) {
            res.json({
                status:1,
                data:result
            });
        }).catch(next);
    },

    deleteInfo:function (req, res, next) {              // 删除
        var userName = "gaoyuyue";
        User.destroy({
           where:{
               userName:userName
           }
        }).then(function () {
            res.json({

            });
        }).catch(next);
    }






};