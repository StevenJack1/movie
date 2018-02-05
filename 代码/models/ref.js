/**
 * 模型关联类
 */
var { sequelize } = require("../config/db");
var User = sequelize.import("./User");
var Comment = sequelize.import("./Comment");
var Movie = sequelize.import("./Movie");
var MovieCategory = sequelize.import("./MovieCategory");


//建立模型之间关联关系
User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' }); //address想反查user必须加这个，否则只能实现user查询address

Movie.hasMany(Comment, { foreignKey: 'movie_id' });
Comment.belongsTo(Movie, { foreignKey: 'movie_id' }); //address想反查user必须加这个，否则只能实现user查询address


//创建表
sequelize.sync({ force: false });