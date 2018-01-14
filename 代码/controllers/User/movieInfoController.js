var { sequelize,Sequelize} = require('../../config/db');
// var User = sequelize.import('../../models/User');

module.exports = {

    getInfo: function (req,res,next) {                      // 查
        res.render('User/movieInfo',{
            title: '放牛班的春天',
            original_title: 'Les choristes',
            year: '2004',
            img: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910824951.jpg',
            directors: '\t克里斯托夫·巴拉蒂',
            casts: '\t热拉尔·朱尼奥,让-巴蒂斯特·莫尼耶,弗朗索瓦·贝莱昂',
            genres: '\t剧情 / 音乐',
            alt: '\thttps://movie.douban.com/subject/1291549/',
            rating: '9.2',
        });
    }
};