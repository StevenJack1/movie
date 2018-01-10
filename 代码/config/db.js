// var Sequelize = require('sequelize');

// module.exports = new Sequelize('test','root','root',{

const Sequelize = require('sequelize');
const sequelize = new Sequelize('movie','root','root',{
    host:'localhost',
    dialect:'mysql',
    pool: {
        max:5,
        min:0,
        idle:10000
    }
});

//测试数据库链接
sequelize.authenticate().then(function() {
    console.log("数据库连接成功");
}).catch(function(err) {
    //数据库连接失败时打印输出
    console.error(err);
    throw err;
});


exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
