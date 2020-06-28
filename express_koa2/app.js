var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//////////////////////////////////////////////////////////////
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRouter = require('./routes/movie');//电影接口的路由模块
var cinemaRouter = require('./routes/cinema');//电影院接口的路由模块

//////////////////////////////////////////////////////////////
//1. 有没有声明路由模块？ 是否真的存在这个路由模块？
//2. 有没有定义url-路由的映射
//3. 有没有重启express项目
//4. 不要直接上来就用nginx来测试，先用localhost:3000/movie
//5. nginx配置文件修改后，有没有重启
//------------------------------------------------------------
var app = express();

//设置跨域访问  
app.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  next();  
});  


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/////////////////////////////////////////////////////////////////////////
//地址-路由的映射
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/users', usersRouter);
app.use('/movie', movieRouter);
app.use('/cinema', cinemaRouter);
//  /corp
//  /order
//  /actor
/////////////////////////////////////////////////////////////////////////
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
