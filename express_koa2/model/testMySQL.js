var mysql = require("MySQL");
var config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "maoyan"
}

var conn = mysql.createConnection(config);
//console.log(conn);

// var sql = "select * from tb_movie limit 5";
// conn.query(sql,function(err,results,fields){
//     console.log(results);
//     console.log(results.length);
//     console.log(JSON.stringify(results));
//     //console.log(fields);//表的每一列的定义
// })

// var actor = {name:'fbb',sex:'0',descr:'好漂亮'}
// sql = "insert into tb_actor(name,sex,descr) value(?,?,?)"
// var data = ['fbb','0','好漂亮'];
// conn.query(sql, data, function (err, results, fields) {
//     if(err)
//         console.log(err)
//     else
//         console.log(JSON.stringify(results));
// })

// sql = "delete from tb_actor where name=?";
// var data = ['fbb'];
// conn.query(sql, data, function (err, results, fields) {
//     if (err)
//         console.log(err)
//     else
//         console.log(JSON.stringify(results));
// })


// sql = "insert into tb_user_remark(uid,movie_id,remark,ctime,point) value(?,?,?,now(),?)"
// var data = [1,1,'好看',5];
// conn.query(sql, data, function (err, results, fields) {
//     if(err)
//         console.log(err)
//     else
//         console.log(JSON.stringify(results));
// })

var obj={
    uid:1,
    movie_id:1,
    remark:'好看',
    ctime: new Date().getTime(),
    point:5
}
var tableName="tb_user_remark";
var columns="";//insert into tb_xxx(col1,col2) value(?,?)
var symbols="";
var data=[];
for(key in obj){
    console.log(key);
    console.log(obj[key]);
    columns += (columns.length>0?",":"") +key
    symbols += (symbols.length > 0 ? "," : "") + "?"
    data.push(obj[key]);
}
console.log(data)
var sql = "insert into " + tableName + "(" + columns + ") value(" + symbols+")";
console.log(sql)