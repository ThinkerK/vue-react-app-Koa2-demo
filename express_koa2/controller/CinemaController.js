var Cinema = require('../model/Cinema')
// Cinema.Dao.getCinemaCountByCorp
// Cinema.Dao.getCinemaCountByDistrict
exports.getCinemaCount = function (req, res, next) {
    var ret={
        corps:[],
        districts:[],
    }
    Cinema.Dao.getCinemaCountByCorp().then(function (results) { //resolve,reject
        console.log(results);
        ret.corps = results;
        let countAll= 0;            
        results.forEach(function(data,index){
            countAll += data.count;
        })
        ret.cinemaCountAll = countAll;
        return Cinema.Dao.getCinemaCountDistrict();
    }).then(function(results){
        console.log(JSON.stringify(results));
        
        //声明了一个item对象，表示某个区，以及下属街道的统计计数
        let item = {
            district:"",
            count:0,
            children:[]//街道计数的数组
        }
        let district="";//表示上一次循环的区名
        let countAll = 0; //表示全部的电影院数量
        results.forEach(function(data,index) {
            console.log(data);
            if(district!=data.district)//不同的区
            {
                if (district != "") //不是第一个循环，相当于遍历到不同的区，需要将上一个区，添加到districts数组
                    ret.districts.push(item);
                district = data.district;
                item = null;//创建一个新的区
                item = {
                    district: district,
                    count: 0,
                    children: []
                }
            }
            //更新当前区的街道-电影院计数
            item.children.push({
                street: data.street,
                count: data.count,
            })
             //更新当前区的电影院计数，和全部的电影院计数
            item.count += data.count;
            countAll += data.count;
        });
        ret.districts.push(item);//添加最后一个区
        ret.districtCountAll = countAll
    }).then(function(){
        console.log(JSON.stringify(ret));
        res.send(ret);
    })
};