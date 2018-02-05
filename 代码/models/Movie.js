/**
 * 电影详情表
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*|{}}
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("movie", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true,    //主键
        },
        alt: {                           //
            type: DataTypes.STRING,
            allowNull: true,
            comment: "链接"
        },
        year: {                         //
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "年份"
        },
        title: {                        //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "中文标题"
        },
        original_title: {               //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "原始标题"
        },
        rating:{                        //
            type: DataTypes.FLOAT,
            allowNull: false,
            comment: "评分"
        },
        directors: {                    //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "导演"
        },
        casts: {                        //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "演员"
        },
        genres: {                        //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "分类关键字"
        },
        image: {                            //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "图片"
        },
    }, {
        underscored: true, //额外字段以下划线来分割
        // createdAt: "created_at",
        // updatedAt: "updated_at",
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        //静态方法，即user模型自带的方法
        classMethods: classMethods,
        comment: "电影信息类",
        // paranoid: true      //虚拟删除
        //实例方法
        // instanceMethods: instanceMethods
    });
}


const classMethods = {

}

//静态方法
// const classMethods = {
//     //根据id查询
//     getUserById: function(id) {
//         return this.findById(id);
//     },
//     //获取所有
//     getUsers: function(options) {
//         return this.findAll(options);
//     },
//     //根据id更新数据
//     updateUserById: function(values, id) {
//         return this.update(values, {
//             where: {
//                 id: id
//             }
//         });
//     },
//     //根据id删除数据
//     deleteById: function(id) {
//         return this.destroy({
//             where: {
//                 id: id
//             }
//         })
//     }
// };
