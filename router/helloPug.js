/*
 * @Author: Sharon
 * @Date: 2020-04-24 17:40:43
 * @LastEditors: Sharon
 * @LastEditTime: 2020-04-24 17:43:06
 * @Description: 
 */
const express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
  res.render('helloPug', { title: 'Hey', message: 'Hello world! (pug)' })
});

module.exports = router;
