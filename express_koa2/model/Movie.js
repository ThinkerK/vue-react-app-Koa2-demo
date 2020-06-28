var mysql = require("./mysql");

exports.add=function(obj){
    mysql.insert("tb_movie",obj,function(err,results){
        if(err)
            console.log(err);
        else{
            var ret = results.affectedRows;
            console.log(JSON.stringify(results));
        }
    })
}

exports.list = function (page,pageSize) {
    var sql = "select * from tb_movie limit " + (page - 1) * pageSize + ", " + pageSize;
    return mysql.query(sql)
}


exports.getActorName= function (ids) {
    var sql = "select movie_id,B.name  from tb_movie_actor A ,tb_actor B  where A.actor_id=B.id and movie_id in("+ids+")"
    return mysql.query(sql)
}