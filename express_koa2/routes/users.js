var express = require('express');
var router = express.Router();
//get url参数：         req.query
//restful url中的变量： req.params
//post 表单参数：       req.body

//restful api
var $=require('../controller/UserController')

//子路由 - 控制器的请求方法 映射（绑定）
// router.route('/') // 
//   .get($.addUserList)
//   .post($.addUser);
// router.route('/:id')//
//   .get($.getUser)
//   .post($.updateUser)
//   .delete($.deleteUser);
router.route('/userlike')
  .get($.getUserLike)
  .post($.addUserLike)
  .delete($.delUserLike);
router.route('/userremark')
  .post($.addUserRemark)
  

module.exports = router;
