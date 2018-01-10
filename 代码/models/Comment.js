/**
 * 评论详情表
 * @param sequelize
 * @param DataTypes
 * @returns {Model|*|{}}
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true,    //主键
            comment: "主键"
        },
        userId: {                           //
            type: DataTypes.STRING,
            field: "user_id",
            comment: "用户id",
            references: { //引用user模型里的id属性，即在comment表中添加user_id逻辑关联
                model: "user",
                key: "userName"
            }
        },
        movieId: {                         //
            type: DataTypes.INTEGER,
            field: "movie_id",
            comment: "电影Id",
            references: { //引用user模型里的id属性，即在comment表中添加user_id逻辑关联
                model: "movie",
                key: "id"
            }
        },
        content: {                        //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "内容"
        },
        floor: {               //
            type: DataTypes.STRING,
            allowNull: false,
            comment: "楼层"
        },
        isHidden: {                            //
            type: DataTypes.BOOLEAN,
            allowNull: false,
            comment: "是否隐藏"
        },
        commentTime: {                        //
            type: DataTypes.DATE,
            allowNull: false,
            comment: "评论时间"
        },
    }, {
        underscored: false, //额外字段以下划线来分割
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        //静态方法，即user模型自带的方法
        classMethods: classMethods,
        comment: "评论信息类",
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

