/*
 * @Author: Sharon
 * @Date: 2020-04-21 09:58:07
 * @LastEditors: Sharon
 * @LastEditTime: 2020-04-24 17:38:14
 * @Description: 
 */
module.exports = function (option) {
  return function (req, res, next) {
    console.log('first-middleware', option);
    next();
  }
}