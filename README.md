# 请严格按照我环境配置的步骤进行操作(数据库配置)
----------

## movie(思沃影院)

## 开发技术栈
* 开发技术：nodejs + expressMVC
* 数据库： mysql
* ORM框架：sequelize
* 测试框架：mocha + supertest + should + istanbul
* js版本：ES6
* 项目工具：webstorm + datagrip + sourceTree + markdown + google
* 压力测试工具：Apache JMeter + badboy
* node进程管理工具: pm2
* 反向代理工具: nginx
* 服务器： centos
* 部署服务器地址：[http://182.254.134.135/](http://182.254.134.135/)

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

### 7.在config目录下有两个sql的文件，这里面存放的是movie和movieCategory表的初始数据，请自行导入到mysql数据库中。

### 8.如果要做测试，请在Terminal中输入
	npm run-script test-cov

### 9.项目运行后，在浏览器输入
	localhost:3000

## 功能完成情况

### 用户故事 #1 作为网站用户，我想通过导航栏搜索电影，以便快速查看想了解的电影

![](https://i.imgur.com/jDhQrTq.png)

### 用户故事 #2 作为网站用户，我想按分类浏览电影，以便查看特定类型的电影

![](https://i.imgur.com/xYBedCX.png)

### 用户故事 #3 作为网站用户，我想查看电影的详细信息，以便更全面的了解一部电影

![](https://i.imgur.com/4ZTvEL9.png)

### 用户故事 #4 作为网站用户，我想在电影详细页面获得类似电影推荐，以便发掘更多可能喜欢的电影

![](https://i.imgur.com/1hfwFLn.png)

### 用户故事 #5 作为API调用者，我想获取有关电影分类的信息，以便给网站用户显示电影分类列表，页面显示如下：
[页面展示](http://182.254.134.135/admin/movieCategory/getMovieCategoryList)
		
![](https://i.imgur.com/GK0SumC.png)
### 用户故事 #6 提供一个API返回多部电影详细信息，提供一个API返回一部电影详细信息
[根据电影ID返回一部电影的详细信息API](http://182.254.134.135/movieInfo/1)	
	
#### 根据导演名或演员名或电影名或电影原名返回电影详细信息(http://182.254.134.135/searchMovieList/"自己相加的值")

[按类别进行过滤](http://182.254.134.135/allMovie)


### 其他功能 #1 在搜索时增加模糊搜索功能，可以输入电影名/原名/导演名/演员名，来显示所有相关信息

![](https://i.imgur.com/EvZvMuV.png)

### 其他功能 #2 电影管理，在首页点击后台入口按钮，进入后台，可以添加电影信息以及删除电影
![](https://i.imgur.com/eDCwqDK.png)

### 其他功能 #3 电影类别管理，可以添加电影类别也可以删除电影类别
![](https://i.imgur.com/YQLbcaC.png)

### 其他功能 #4 之后是测试，输入：
	npm run-script test-cov
![](https://i.imgur.com/cFN7oKm.png)

### 其他功能 #5 进行压力测试，参数设置如下：

#### 使用国外服务器部署的时候部分参数如下：
* 每秒激发10个线程(相当于每秒十个用户同时访问)，循环5次，测试结果显示：在每秒钟有十个人同时访问该页面的情况下，每个用户显示页面的平均时间约为0.2秒，最小时间约为0.1秒，最大时间约为0.4秒，出错率为0。
![](https://i.imgur.com/HgOMMfa.png)

* 每秒激发100个线程(相当于每秒100个用户同时访问)，循环5次，测试结果显示：在每秒钟有一百个人同时访问该页面的情况下，每个用户显示页面的平均时间约为1.5秒，最小时间约为0.1秒，最大时间约为10秒，出错率为0。
![](https://i.imgur.com/Ot7UdVF.png)

* 每秒激发500个线程(相当于每秒500个用户同时访问)，循环5次，测试结果显示：在每秒钟有500个人同时访问该页面的情况下，每个用户显示页面的平均时间约为10秒，最小时间约为1.6秒，最大时间约为179秒，出错率为1.26%。
![](https://i.imgur.com/YWVLeK1.png)

* 这块测试到线程1800，模拟5次基本上没什么问题，当测试到线程数量为5000的时候，错误率高达70.3%，数据忘记截屏了。有的线程不知道为什么跑不起来。

#### 使用腾讯云服务器测试的时候，当线程超过500后基本上就炸了
* 每秒激发100个线程，循环5次，测试结果显示：每个用户显示页面的平均时间约为19秒，最小时间约为0.08秒，最大时间约为42秒，出错率为0.68%。
![](https://i.imgur.com/iEhHFhl.png)

* 500个线程基本上就不行了。


## 页面一览

### 1
![](https://i.imgur.com/tLfoh4Z.png)

### 2
![](https://i.imgur.com/7GSXNGD.jpg)

### 3
![](https://i.imgur.com/oIWQhTt.png)

### 4
![](https://i.imgur.com/GY2933A.png)

### 后台不再展示