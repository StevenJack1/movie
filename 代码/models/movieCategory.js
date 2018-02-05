/**
 * 电影类别表
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*|{}}
 */
module.exports = function(sequelize, DataTypes) {
	return sequelize.define("movieCategory", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false, //非空
			autoIncrement: true, //自动递增
			primaryKey: true,    //主键
			comment: "主键"
		},
		category: {               //
			type: DataTypes.STRING,
			allowNull: false,
			comment: "类别"
		},

	}, {
		underscored: false, //额外字段以下划线来分割
		timestamps: false, //取消默认生成的createdAt、updatedAt字段
		freezeTableName: true, // Model 对应的表名将与model名相同
		//静态方法，即user模型自带的方法
		classMethods: classMethods,
		comment: "电影类别表",
		// paranoid: true      //虚拟删除
		//实例方法
		// instanceMethods: instanceMethods
	});
}

const classMethods = {

}
