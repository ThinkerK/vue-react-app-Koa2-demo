var mysql = require("./MySQL");

exports.addUserLike=function(obj){
   return mysql.insert("tb_user_like",obj)
}

exports.addUser=function(obj){
    return mysql.insert("tb_user",obj)
}

exports.getUserLike=function(uid,movie_id){

    var sql = "select * from tb_user_like where uid=? and movie_id=?"
    var data=[uid,movie_id];
    return mysql.query(sql,data)
    
}
exports.delUserLike=function(uid,movie_id){

    var sql = "delete  from tb_user_like where uid=? and movie_id=?"
    var data=[uid,movie_id];
    return mysql.query(sql,data)
    
}

exports.addUserRemark=function(obj){
    return mysql.insert("tb_user_remark",obj)
 }