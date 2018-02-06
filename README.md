## movie(思沃影院)

## 开发技术栈
* 开发技术：nodejs + expressMVC
* 数据库： mysql
* ORM框架：sequelize
* 测试框架：mocha + supertest + should + istanbul
* js版本：ES6
* 项目工具：webstorm + datagrip + sourceTree + markdown + google
* 压力测试工具：
* 部署服务器：

## 项目目录结构解析
![](https://i.imgur.com/8geGkc2.png)

### 1. bin -- 启动项
### 2. config -- 数据库配置项以及movie表和movieCategory表的插入语句
### 3. controllers -- expressMVC的控制层，逻辑代码(分为后台admin和前台user)
### 4. coverage -- 测试覆盖率报告
### 5. models -- 表
### 6. publick -- 静态资源,js/css等等
### 7. routes -- 路由(environment是入口文件app中分离出的环境语句，index是路由请求的语句)
### 8. test -- 存放的是各种测试，其中对应的每一个都是controller中的方法
### 9. views -- 页面层，分为后台页面和前台页面
### 10. app.js -- 入口文件
### 11. package.json -- 包
### 12. 详细的目录结构请参考[我的博客](http://www.yanzefan.top/2018/01/12/Node.js+expressMVC+mysql(Sequelize%E6%93%8D%E4%BD%9C)%E7%9A%84%E5%BF%83%E5%BE%97%E4%B8%8E%E7%BB%8F%E9%AA%8C/)

## 环境配置

### 1.首先保证你是在node环境，进入cmd，输入测试语句：
    node -v
	npm -v
### 2.确保你有mysql数据库，并且database的名称为movie,mysql的账户密码分别是root,root，*注意此处可以更改*，找到我项目中的config文件下的db.js，下面的参数可以更改，不在赘述。
	const sequelize = new Sequelize('movie','root','root',{
	    host:'localhost',
	    dialect:'mysql',
	    pool: {
	        max:5,
	        min:0,
	        idle:10000
	    },
		logging: false
	});

### 3.编辑工具webstorm和数据库图形工具datagrip以及图形拉代码工具sourceTree可以换，按照自己喜好。

### 4.将代码从[github](https://github.com/StevenJack1/movie)下落下后，具体导入项目可以参考[我的博客](http://www.yanzefan.top/2018/01/07/Express%E6%A1%86%E6%9E%B6%E4%B8%8ENodeJs%E7%9A%84%E4%BD%BF%E7%94%A8/)不在赘述,*此处应注意，应该导入的是我仓库的代码文件，不要拉下代码后直接全部导入，请看我仓库的主体目录结构。*

### 5.将项目导入后，导入modules,执行
	npm install

### 6.启动项目，执行
	supervisor ./bin/www

### 7.如果要做测试，请在Terminal中输入
	npm run-script test-cov

### 8.项目运行后，在浏览器输入
	localhost:3000

### 9.跳转到主页面，如下：
![](https://i.imgur.com/UV1Nhzq.jpg)

### 10.在这个页面可以选电影可以根据电影名或导演名或演员名搜索相关的电影，在最新热门电影可以根据类型切换电影，可以点击更多，则跳转到：
![](https://i.imgur.com/VuTlIcv.jpg)

### 11.在更多电影中，可以根据类型和排序方式来显示电影，排序是按照评分或者时间来排序，如果点击一个电影后，可以跳转到电影详情页面，如下：
![](https://i.imgur.com/qMqtUuo.png)

### 12.在每一个页面上方都有一个搜索栏，可以根据关键字进行模糊查询，如下：
![](https://i.imgur.com/PxUzPOQ.jpg)

### 13.这是前台显示页面，还有一个后台管理页面，请输入
	localhost:3000/admin

### 14.在页面中有两个功能模块，分别是电影管理和电影分类管理，如下：
![](https://i.imgur.com/eDCwqDK.png)

### 15.另一个页面不在展示，请自行运行。

### 16.之后是测试，输入：
	npm run-script test-cov

### 17.测试结果如下：
![](https://i.imgur.com/cFN7oKm.png)