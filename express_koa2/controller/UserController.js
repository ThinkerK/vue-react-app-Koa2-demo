var User = require('../model/User')

//新增用户想看
exports.addUserLike = function(req,res,next){
    
    var uid = 1;//TODO从session获取用户星系
    
    var movie_id = req.query.movie_id;
    var obj={
        uid:uid,
        movie_id:movie_id
    }
    console.log('addUserLike:'+JSON.stringify(obj));

    var ret={
        code:1,
        msg:'添加成功'
    }
        // uid:uid,
    User.addUserLike(obj).then(function(results){
        console.log(results)
    },function(err){
        console.log(err);
        ret={
            code:0,
            msg:'添加失败'
        }
    }).then(function(){
        res.send(ret)
    })

}

exports.getUserLike = function(req,res,next){
    
    var uid = 1;//TODO从session获取用户星系
    var movie_id=req.query.movie_id;
    var obg={
        uid:uid,
        movie_id:movie_id
    }
    

    var ret={
        code:1,
       
    }
    User.getUserLike(uid,movie_id).then(function(results){
        
        if(results.length==0)
        ret.code=0;
       
    },function(err){
        
        ret.code=-1;
    }).then(function(){
        res.send(ret)
    })
}

exports.delUserLike = function(req,res,next){
    
    var uid = 1;//TODO从session获取用户星系
    var movie_id=req.query.movie_id;
    var obg={
        uid:uid,
        movie_id:movie_id
    }
    

    var ret={
        code:1,
       
    }
    User.delUserLike(uid,movie_id).then(function(results){
        
        if(results.length==0)
        ret.code=0;
       
    },function(err){
        
        ret.code=-1;
    }).then(function(){
        res.send(ret)
    })
}

//新增用户评论
exports.addUserRemark = function(req,res,next){
    
    var uid = 1;//TODO从session获取用户星系
    
    var movie_id = req.query.movie_id;
    var remark = req.query.remark;
    var point = req.query.point;
    var obj={
        uid:uid,
        movie_id:movie_id,
        remark:remark,
        point:point
    }
    console.log('addUserRemark:'+JSON.stringify(obj));

    var ret={
        code:1,
        msg:'添加成功'
    }
        // uid:uid,
    User.addUserRemark(obj).then(function(results){
        console.log(results)
    },function(err){
        console.log(err);
        ret={
            code:0,
            msg:'添加失败'
        }
    }).then(function(){
        res.send(ret)
    })

}


exports.getUserRemark = function(req,res,next){
    
    var uid = 1;//TODO从session获取用户星系
    var movie_id=req.query.movie_id;
    var obg={
        uid:uid,
        movie_id:movie_id
    }
    

    var ret={
        code:1,
       
    }
    User.getUserRemark(uid,movie_id).then(function(results){
        
        if(results.length==0)
        ret.code=0;
       
    },function(err){
        
        ret.code=-1;
    }).then(function(){
        res.send(ret)
    })
}