var mysql = require("mysql");
var config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "maoyan"
}

var conn = mysql.createConnection(config);

var query = function (sql, data) {
    var p = new Promise(function(resolve,reject){
        conn.query(sql, data, function(err,results){
            if(err)
                reject(err);
            else
                resolve(results);
        });
    });
    return p;
}



exports.insert = function(tableName, obj){
    var columns = "";//insert into tb_xxx(col1,col2) value(?,?)
    var symbols = "";
    var data = [];
    for (key in obj) {
        console.log(key);
        console.log(obj[key]);
        columns += (columns.length > 0 ? "," : "") + key
        symbols += (symbols.length > 0 ? "," : "") + "?"
        data.push(obj[key]);
    }
    console.log(data)
    var sql = "insert into " + tableName + "(" + columns + ") value(" + symbols + ")";
    console.log(sql)
    return query(sql,data);
}

exports.query= query;
exports.delete= query;
exports.updata= query; 