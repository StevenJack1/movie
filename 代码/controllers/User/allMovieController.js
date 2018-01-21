
var { sequelize,Sequelize} = require('../../config/db');
var User = sequelize.import('../../models/User');
var Movie = sequelize.import('../../models/Movie');
var _       = require('lodash');            //_.pick导入
var marked = require('marked');             //_.pick导入
var mysql = require('mysql');

module.exports = {

    getInfo: function (req,res,next) {                      // 查
        res.render("User/allMovie");
    },

    movieList:function (req,res,next) {
        if(req.method === 'POST' ){
            var clickName = _.pick(req.body, 'className');
            var className = clickName.className;
            var sql = "select * from Movie where genres like '%"+className+"%'; ";
            if(className === '全部'){
                Movie.findAll().then(function (result) {
                    res.send(result);
                })
            } else {
                sequelize.query(sql).spread((result, metadata) => {
                    res.send(result);
                });
            }
        } else if(req.method === 'GET'){
            Movie.findAll().then(function (result) {
                res.send(result);
            }).catch(function (err) {
                console.log(err);
            })
        }
    }
};
