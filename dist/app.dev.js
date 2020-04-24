"use strict";

/*
 * @Author: Sharon
 * @Date: 2020-04-20 18:07:35
 * @LastEditors: Sharon
 * @LastEditTime: 2020-04-24 17:52:51
 * @Description: 
 */
var express = require("express");

var path = require("path"); // 引入路由文件


var indexRouter = require('./router/index');

var helloPugRouter = require('./router/helloPug'); // 初始化express实例


var app = express();

var myLogger = function myLogger(req, res, next) {
  console.log('logger');
  next();
}; // Express托管静态文件


app.use(express["static"](path.join(__dirname, 'page')));
app.use(myLogger);
app.use('/index', indexRouter);
app.use('/helloPug', helloPugRouter); // 引入pug模板

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');
app.listen(5000, function () {
  console.log('start: 5000');
}); // 监听5000端口