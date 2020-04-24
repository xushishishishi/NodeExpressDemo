/*
 * @Author: Sharon
 * @Date: 2020-04-20 18:07:35
 * @LastEditors: Sharon
 * @LastEditTime: 2020-04-24 17:52:51
 * @Description: 
 */

const express = require("express");
const path = require("path");

// 引入路由文件
const indexRouter = require('./router/index');
const helloPugRouter = require('./router/helloPug');

// 初始化express实例
const app = express();

const myLogger = function (req, res, next) {
  console.log('logger');
  next();
}

// Express托管静态文件
app.use(express.static(path.join(__dirname, 'page'))); 
app.use(myLogger);
app.use('/index', indexRouter);
app.use('/helloPug', helloPugRouter);

// 引入pug模板
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');

app.listen(5000, () => {
  console.log('start: 5000');
}); // 监听5000端口