<template>
  <div class="moviedetails">
    <!-- 头部 -->
      <div class="cheader">
          <div class="ch_con">
              <div class="text">
                <router-link to="/home/MoviePage">
                <span class="iconfont icon-fanhui"></span></router-link>
                {{movie.name}}
              </div>
              <div class="tubiao">
                  <div class="dian">
                      <span class="iconfont icon-yuan1"></span>
                  </div>
                  <div class="yuan">
                      <span class="iconfont icon-yuan1"></span>
                  </div>
              </div>
          </div>
      </div>
      <!-- 评论 -->
      <div class="remark1" :class="{plactive:plshow}">  
          <div class="cheader">
          <div class="ch_con">
              <div class="text">
                <span class="iconfont icon-fanhui" @click="plhidden"></span>
                评论
              </div>
              <div class="tubiao">
                  <div class="dian">
                      <span class="iconfont icon-yuan1"></span>
                  </div>
                  <div class="yuan">
                      <span class="iconfont icon-yuan1"></span>
                  </div>
              </div>
          </div>

          


      </div>


      <div>
        
        <div class="jizhi">
            <span class="s1">{{ value3 }}</span>
            <span class="s2">分</span>
        </div>
        <p class="s3">请点击评分</p>
        <el-rate
            v-model="value3"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <div class="pingpr">
            <textarea v-model="textarea" class="pingcon" cols="40" rows="7"></textarea>
        </div>
        <div class="tijiao" @click="addremark(value3,textarea)">
            <div>提交</div>
        </div>
        
          
    </div>
      </div>




      <!-- movie详情 -->
      <div class="details">
          <div class="banbg"></div>
          <img :src="movie.logo_url" alt="" class="imgbg">
          
        <div class="moviedetails-box">
          <div class="movie-ban">
            <img :src="movie.logo_url" alt="">
          </div>
          <div class="movie-dtl">
            <div class="tit">{{movie.name}}</div>
            <div class="eng">Black Water</div>
            <div class="point">
              <span>6.2</span>
              (2.5万人评)
            </div>
            <div class="cate">剧情,动作,犯罪</div>
            <div class="long">美国/104分钟</div>
            <div class="ctime">2018-06-08大陆上映</div>
          </div>
          <div class="more">
            <span class="iconfont icon-you"></span>
          </div>
        </div>
        <div class="twobtn">
          <span class="btnlike"  @click="addlike()">
            <span class="iconfont icon-xihuan1" :class="{likeactive:like}"></span>
             喜欢
          </span>
          <span class="btnpoint" @click='pl'>
            <span class="iconfont icon-xingxing"  :class="{remarkactive:remarkcl}"></span>
             {{pltext}}
          </span>
        </div>
      </div>

      <!-- 日期 -->
      <div class="dateList">
          <ul class="dlist">
            <li class="dli" @click="change(index)" v-for="(item,index) in datearr" :key="index" :class="{dactive:index==nowIndex}">
                {{item}}
            </li>
          </ul>  
      </div>

      <!-- cinema cate-->
      <div class="cinemacate">
        <div>全城
          <span class="drop"></span>
        </div>
        <div>品牌
          <span class="drop"></span>
        </div>
        <div class="noborder">特色
          <span class="drop"></span>
        </div>

      </div>
      
      <!-- cinema -->
      <div class="cinemabox">
        <router-link to="/cinema">
        <div class="cinemaitem" v-for="(item,index) in cinema" :key="index">
            <div class="name">
              <span>{{item.name}}</span>
              <span class="price">
                  <span class="price1">{{item.price}}</span>
                  <span class="tex">元起</span>
              </span>
            </div>
            <div class="adress">
              <div class="dizhi">{{item.dizhi}}</div>
              <div class="juli">{{item.juli}}</div>
            </div>
            <div class="chang">
              <span>{{item.chang}}</span>
            </div>
        </div>
        </router-link>
      </div>
     
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
      value3: null,
      textarea: null,
      like:0,
      remarkcl:0,
      plshow:0,
      pltext:'评论',
      movie:{},
      datearr:[
        '06月11日','06月12日','06月13日','06月14日','06月15日','06月16日',
      ],
      nowIndex: 0,
      cinema:[
        {
          name:'中影国际影城(昌平永旺店)',
          price:49,
          dizhi:'昌平区北清路1号永旺国际商城3楼',
          juli:'4.7km',
          chang:'近期场次：19:10  21:15'
        },
        {
          name:'华联影院(回龙观店)',
          price:39,
          dizhi:'昌平区北清路1号永旺国际商城3楼',
          juli:'8.7km',
          chang:'近期场次：19:10  21:15'
        },
        {
          name:'中影国际影城(昌平永旺店)',
          price:49,
          dizhi:'昌平区北清路1号永旺国际商城3楼',
          juli:'4.7km',
          chang:'近期场次：19:10  21:15'
        },
        {
          name:'华联影院(回龙观店)',
          price:39,
          dizhi:'昌平区北清路1号永旺国际商城3楼',
          juli:'8.7km',
          chang:'近期场次：19:10  21:15'
        },{
          name:'中影国际影城(昌平永旺店)',
          price:49,
          dizhi:'昌平区北清路1号永旺国际商城3楼',
          juli:'4.7km',
          chang:'近期场次：19:10  21:15'
        },
        {
          name:'华联影院(回龙观店)',
          price:39,
          dizhi:'昌平区北清路1号永旺国际商城3楼',
          juli:'8.7km',
          chang:'近期场次：19:10  21:15'
        }
      ]
    }
  },
  components: {

  },
   methods: {
    change(index) {
      this.nowIndex = index;
    },
    pl(){
      this.plshow=1;
    },
    plhidden(){
      this.plshow=0
    },
    addremark(point,rem){
      
      if(rem!=''){
        this.$http.post('http://blackmamba.top:3000/users/userlike?movie_id='+this.movie.movie_id+'&remark='+rem+'&point='+point)
        .then(res =>{
          if(res.data.code==1){
            this.remarkcl=1;
            alert('评论成功');
            this.plshow=0;
            this.pltext=point+'分'
          }
        })
      }
    },
    addlike(){
      if(this.like==0){
         this.$http.post('http://blackmamba.top:3000/users/userlike?movie_id='+this.movie.movie_id)
         .then(res =>{
           if(res.data.code==1){
             this.like=1
           }
         })
      }else{
         this.$http.delete('http://blackmamba.top:3000/users/userlike?movie_id='+this.movie.movie_id)
         .then(res =>{
           if(res.data.code==1){
             this.like=0
           }
         })
      }
       
    }
  },
  created(){
     this.movie = this.$route.query;
     this.$http.get('http://blackmamba.top:3000/users/userlike?movie_id='+this.movie.movie_id)
     .then(res => {
                    this.like=res.data.code;
                })
     
  }
}
</script>

<style scoped> 
.remark1{
  width: 100%;
  position: fixed;
  top: 0;
  height: 100%;
  background: #f5f5f5;
  z-index:10000;
  display: none;
}
.plactive{
  display: block
}
.tijiao{
    
    display: flex;
    justify-content: center;
}
.tijiao div{
    width: 80%;
    height: 80px;
    background: #f90;
    color: #fff;
    text-align: center;
    line-height: 80px;
    border: 1px solid gray;/*no*/
    border-radius: 10px;
    font-size: 35px
}
.pingpr{
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
.pingcon{
    border: 1px solid gray;/*no*/
    width: 80%;
}
.yingpian{
    color: #fff;
    font-size: 40px;
}
.hader{
    height: 100px;
    background: grey;
    color: #fff;
    padding-left: 20px;
    line-height: 100px;
}
.hader i{
    font-size: 44px
}
.s1{
    color: #FFC600;
    font-size: 100px;
}
.s2{
    color: #FFC600;
    font-size: 32px;
}
.jizhi{
    text-align: center;
    margin-top:100px; 
}
.s3{
    color: #FFC600;
    font-size: 35px;
    text-align: center;
}


.twobtn .likeactive{
  color: #f03d37
}
.twobtn .remarkactive{
  color: #f03d37
}
.moviedetails{
  width: 100%;
  height: 100%;
  overflow-x:hidden;
  overflow-y:scroll;
}
.iconfont{
  color: white
}
.moviepage{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}
.cheader{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background: black;
    display: flex;
    font-weight: 400;
    z-index:1000;

}
.ch_con{
    width: 95%;
    margin: 0 auto;
    color: white;
    font-size: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center
}
.ch_con .tubiao{
    width: 180px;
    height: 60px;
    border: .5px solid white;/*no*/
    border-radius: 60px;
    display: flex;
    align-items: center
}
.ch_con .tubiao div{
    width: 50%;
    height: 40px;
    text-align: center;
    line-height: 30px;
}
.ch_con .tubiao .dian{
    border-right: .5px solid white;/*no*/

}
.text .icon-fanhui{
  font-size: 55px;
}
.details{
  position: relative;
  padding: 38px 0px 38px 30px;
  overflow: hidden;
  margin-top: 100px;
}
.moviedetails-box{
    position: relative;
    height: 300px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    z-index:10
}
.imgbg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
}
.banbg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(000, 000, 000, .7);
  z-index: 2
}
.movie-ban img{
    width: 220px;
    height: 300px;
    box-sizing: border-box;
    position: relative;
    z-index: 10
}
.movie-dtl{
  width: 50%;
  margin-left: 20px;
}
.movie-dtl .tit{
   position: relative;
    z-index: 10;
    font-size: 40px;
        text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 700;
    color: white
}
.movie-dtl .eng{
    margin-top: 15px;
    font-size: 24px;
    color: #fff;
    opacity: .8;
    position: relative;
    z-index: 10;
}
.movie-dtl .point span{
      font-size: 36px;
    font-weight: 700;
    color: #fc0;
    margin-top: 20px;
    position: relative;
    z-index: 10;
}
.movie-dtl .point{
    margin-top: 15px;
    font-size: 24px;
    color: #fff;
    opacity: .8;
    position: relative;
    z-index: 10;
}
.movie-dtl .cate{
  margin-top: 15px;
    font-size: 24px;
    color: #fff;
    opacity: .8;
    position: relative;
    z-index: 10;
}
.movie-dtl .long{
  margin-top: 15px;
    font-size: 24px;
    color: #fff;
    opacity: .8;
    position: relative;
    z-index: 10;
}
.movie-dtl .ctime{
  margin-top: 15px;
    font-size: 24px;
    color: #fff;
    opacity: .8;
    position: relative;
    z-index: 10;
}
 .more{
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
    z-index: 10;
}
.more .icon-you{
  font-size: 80px;
  color: #fff;
  opacity:.8
}
.twobtn{
  margin: auto;
  margin-top: 20px;
  position: relative;
  z-index: 10;
  color: white;
  font-size: 30px;
  opacity: .8;
  
}
.twobtn .iconfont{
  font-size: 32px;
  opacity: .8;
}
.btnlike{
  display: inline-block;
  width: 325px;
  height: 60px;
  border:1px solid #e8e8e8;/*no*/
  background: rgba(255,255,255,.3);
  border-radius: 6px;
  text-align: center;
  line-height: 60px;
}
.btnpoint{
  margin-left: 20px;
  display: inline-block;
  width: 325px;
  height: 60px;
  border:1px solid #e8e8e8;/*no*/
  background: rgba(255,255,255,.3);
  border-radius: 6px;
  text-align: center;
  line-height: 60px;
}
.dateList{
  width: 100%;
  height: 90px;
  background: white;
  overflow-x: scroll;
  border-bottom: 2px solid transparent;/*no*/
}
.dlist{
  overflow-x: scroll;
  width: 1000px
}
.dlist .dli{
    position: relative;
    display: inline-block;
    width: 230px;
    line-height: 86px;
    margin-left:9px;
    font-size: 28px;
    text-align: center;
    list-style: none;
    color: #666;
}
.dlist .dactive{
  border-bottom: 2px solid #f03d37;/*no*/
    color: #f03d37;
}
.cinemacate{
    position: relative;
    width: 100%;
    height: 80px;
    z-index: 120;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;/*no*/
    border-bottom: 1px solid #e8e8e8;/*no*/
    margin-top: -2px;
    display: flex;
    align-items: center;
}
.cinemacate div{
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    line-height: 80px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    font-size: 26px;
    text-overflow: ellipsis;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-right: 1px solid #e8e8e8;/*no*/
}
.noborder{
  border: none;
}
.drop{
      display: inline-block;
    position: absolute;
    top: 20px;
    right:60px;
    width: 0;
    height: 0;
    margin-left: 8px;
    border: 4px solid transparent;/*no*/
    border-top-color: #b0b0b0;
  
}
.cinemabox{
  width: 100%;
  min-height: 1204px;
}
.cinemaitem{
    padding: 26px 30px 26px 0;
    margin-left: 30px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.cinemaitem .name{
    line-height: 46px;
    font-size: 32px;
    color: #000;
    white-space: nowrap;
}
.cinemaitem .name .price{
    padding-top: 18px;
    padding-left: 6px;
        color: #f03d37;
}
.cinemaitem .name .price .price1{
  font-size: 36px;
}
.cinemaitem .name .price .tex{
  margin-left: 3px;
  font-size: 22px;
}
.cinemaitem .adress{
  margin-top: 12px;
  font-size: 26px;
  color: #666;
  display: flex;
  line-height: 1.5;
}
.dizhi{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
}
.juli{
      margin-left: 5px;
}
.chang{
    padding: 10px 30px 0 0;
    margin-right: -30px;
    line-height: 1.5;
    font-size: 24px;
    color: #999;
}
</style>