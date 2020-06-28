var express = require('express');
var router = express.Router();
//get url参数：         req.query
//restful url中的变量： req.params
//post 表单参数：       req.body

//restful api
var movie=require('../controller/MovieController')

//子路由 - 控制器的请求方法 映射（绑定）
router.route('/') // .../movie/
  .get(movie.getList)
  .post(movie.addMovie);
router.route('/:id')// .../movie/:id
  .get(movie.getMovie)
  .post(movie.updateMovie)
  .delete(movie.deleteMovie);

module.exports = router;
