var mysql = require("./MySQL");

var Dao = {
    getCinemaCountDistrict:function(){
        var sql='select district,street,count(*) as count from tb_cinema group by district, street;'
        var data=[];
        return mysql.query(sql,data)
        
    },
    getCinemaCountByCorp:function(){
        var sql="SELECT replace(A.name,'\r','') as name, count(*) as count from tb_cinema B,tb_corp A where A.id=B.corp_id GROUP BY A.name;"
        var data=[];
        return mysql.query(sql,data)
    }
}

exports.Dao=Dao