var express = require('express');
var router = express.Router();
//get url参数：         req.query
//restful url中的变量： req.params
//post 表单参数：       req.body


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var params = req.query;
  var year = params.year;
  var sourceid=params.sourceid;
  console.log(year+","+sourceid)
  res.send('---movie list---');
});
//http://host/corp/1/cinema
router.get('/:id', function (req, res, next) {
  console.log(req.query);
  console.log(req.params);
  res.send('---movie item---');
});
router.get('/:id/abc', function (req, res, next) {
  console.log(req.query);
  console.log(req.params);
  res.send('---movie item---');
});
module.exports = router;
