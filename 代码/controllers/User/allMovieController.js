var { sequelize,Sequelize} = require('../../config/db');
var User = sequelize.import('../../models/User');
var Movie = sequelize.import('../../models/Movie');
var _       = require('lodash');            //_.pick导入
var marked = require('marked');             //_.pick导入
// app.use(bodyParser.urlencoded())

module.exports = {

    getInfo: function (req,res,next) {                      // 查
        res.render("User/allMovie");
    },

    movieList:function (req,res,next) {
        if(req.method === 'POST' ){
            var clickName = _.pick(req.body, 'className');
            var className = clickName.className;

            Movie.findAll({
                // genres: /"+className+"/
            }).then( function (result) {
                // console.log(result);
                var data = [];
                // result.forEach(function (result) {
                //     var movieData = {
                //         id:result.id,
                //         alt:result.alt,
                //         year:result.year,
                //         title:result.title,
                //         original_title:result.original_title,
                //         rating:result.rating,
                //         directors:result.directors,
                //         casts:result.casts,
                //         genres:result.genres,
                //         image:result.image,
                //         description:result.description
                //     }
                //     // console.log(movieData);
                //     data.push(movieData);
                //     len = data.length;
                // });
                // console.log(data);
                res.send(data);
            }).catch(function (err) {
                console.log(err);
            });
        } else if(req.method === 'GET'){
            Movie.findAll().then(function (result) {
                var data = [];
                result.forEach(function (result) {
                    var movieData = {
                        id:result.id,
                        alt:result.alt,
                        year:result.year,
                        title:result.title,
                        original_title:result.original_title,
                        rating:result.rating,
                        directors:result.directors,
                        casts:result.casts,
                        genres:result.genres,
                        image:result.image,
                        description:result.description
                    }
                    data.push(movieData);
                    len = data.length;
                });
                res.send(data);
            }).catch(function (err) {
                console.log(err);
            })
        }
    }
};
