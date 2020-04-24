/*
 * @Author: Sharon
 * @Date: 2020-04-24 17:32:59
 * @LastEditors: Sharon
 * @LastEditTime: 2020-04-24 17:45:43
 * @Description: 
 */
const express = require('express');
const firstMiddleware = require('../middleware/first-middleware');

let router = express.Router();

// router.get('/', function (req, res) {
//   console.log('indexRouter')
//   res.send('hello xuxu');
// });

router.get('/', firstMiddleware('xuxu'));

module.exports = router;
