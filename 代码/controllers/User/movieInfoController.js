var { sequelize,Sequelize} = require('../../config/db');
var Movie = sequelize.import('../../models/Movie');
var _       = require('lodash');            //_.pick导入
var marked = require('marked');             //_.pick导入

module.exports = {

    getInfo: function (req,res,next) {                                      // 查
        Movie.findById('1291546').then(function (result) {
            res.render('User/movieInfo',{
                id: result.id,
                title: result.title,
                original_title: result.original_title,
                year: result.year,
                img: result.image,
                directors: result.directors,
                casts: result.casts,
                genres: result.genres,
                alt: result.alt,
                rating: result.rating,
            })
        }).catch(next)
    },

    searchMovie:function (req, res, next) {
        if(req.method === 'POST'){
            res.send("test");
        } else if(req.method === 'GET'){
            res.send("aa");
        }

    }
//     createInfo:function (req, res, next) {
//         Movie.create( {
//             id: '1',
//             title: '放牛班的春天',
//             original_title: 'Les choristes',
//             year: '2004',
//             img: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910824951.jpg',
//             directors: '克里斯托夫·巴拉蒂',
//             casts: '热拉尔·朱尼奥,让-巴蒂斯特·莫尼耶,弗朗索瓦·贝莱昂',
//             genres: '剧情 / 音乐',
//             alt: 'https://movie.douban.com/subject/1291549/',
//             rating: '9.2',
//         }).then(function (result) {
//             res.json({
//                 status: 1,
//                 data: result,
//             });
//         }).catch(next);
//     },
};