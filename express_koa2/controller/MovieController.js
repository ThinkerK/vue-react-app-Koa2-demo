var Movie = require('../model/Movie')

//支持分页查询
exports.getList = function(req,res,next){
    var pageSize=10;
    var page = req.query.page;
    if(!page)
        page = 1;
    Movie.list(page, pageSize).then(function(results){
        //movie_id列表
        var ids="";
        for(var i=0;i<results.length;i++){
            if(ids.length>0)
                ids+=','
            ids+=""+results[i].id;
        }
        
        console.log(ids);
        movieList=results;
        return Movie.getActorName(ids);
        console.log(actors);
    },function(err){
        console.log(err);
    }).then(function(results){
        for(let i = 0;i<movieList.length;i++){
            let movie_id=movieList[i].id;
            let actors='';
            for(let j=0; j<results.length;j++){
                if(movie_id==results[j].movie_id){
                    if(actors.length>0)
                        actors+=","
                    actors+=results[j].name.replace('\r','')
                }
            }
            movieList[i].actors=actors  ;  
        }
        res.send(JSON.stringify(movieList));
        console.log(movieList)
    })
};
exports.getMovie = function(req,res,next){
    res.send("---getMovie---")
};
exports.addMovie = function(req,res,next){
    res.send("---addMovie---")
};
exports.updateMovie = function(req,res,next){
    res.send("---updateMovie---")
};
exports.deleteMovie = function(req,res,next){
    res.send("---deleteMovie---")
};
