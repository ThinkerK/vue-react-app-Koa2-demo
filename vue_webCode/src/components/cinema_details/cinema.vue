<template>
  <div class="cinema">
    <!-- 头部 -->
      <div class="cheader">
          <div class="ch_con">
              <div class="text">
                <router-link to="/moviedetails">
                <span class="iconfont icon-fanhui"></span></router-link>
                中影国际影城(昌平永旺店)
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

      <!-- 影院 -->
      <div class="cdcp">
        <div class="caddress">
          <div class="name">中影国际影城(昌平永旺店)</div>
          <div class="dizhi">昌平区北清路1号永旺国际商城3楼</div>
          <div class="ditu">
            <span class="iconfont icon-ditu"></span>
          </div>
        </div>
        <div class="cmovie">
          <div class="movieban">
            <div class="bag"></div>
            <div class="ban">
              <div class="item">
                <img src="@/assets/images/dy3.jpg" alt="">
              </div>
              
            </div>
          </div>
          <div class="movied">
              <div class="name">
                <span>深海越狱</span>
                <span class="point">
                  6.2
                  <span class="tex">分</span>
                </span>
              </div>
              <div class="desc">104分钟 | 剧情 | 尚格·云顿,杜夫·龙格尔</div>  
          </div>
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
      <!-- 场次 -->
      <div class="changbox">
        <div class="changitem"  v-for="(item,index) in changciarr" :key=index>
            <div class="changdtl" >
                <div class="timebox">
                  <div class="time">{{item.stime}}</div>
                  <div class="etime">
                    {{item.etime}}
                    <span>散场</span>
                  </div>
                </div>
                <div class="room">
                  <div class="roomcate">{{item.cate}}</div>
                  <div class="roomnum">{{item.roomnum}}</div>
                </div>
                <div class="price">
                    <div class="tex">
                      <span class="d">¥</span>
                      {{item.price}}
                    </div>
                </div>
                <div class="btn">
                    <div class="btns">购票</div> 
                </div> 
            </div>
        </div>
      </div>
      <div class="eat">
        <div class="margin"></div>  
        <div class="eatcon">
          <div class="etit">影院超值套餐</div> 
          <div class="eatitem" v-for="(item,index) in eatarr" :key="index">
            <img src="@/assets/images/bmh.jpg" alt=""> 
            <span class="hot">HOT</span>
            <div class="iteminfo">
              <div class="tit">
                <span class="danren">{{item.human}}</span>  {{item.tit}}
              </div>
              <div class="sell">已售{{item.sell}}</div>
              <div class="eprice">
                <span>¥</span>  
                {{item.price}}
              </div>
              <div class="ebtn">去购买</div>
            </div>
          </div>
        </div>
      </div> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      datearr:[
              '06月11日','06月12日','06月13日','06月14日','06月15日','06月16日',
            ],
      nowIndex: 0,
      changciarr:[
          {
            stime:'11.00',
            etime:'13.23',
            cate:'原版 2D',
            roomnum:'八号全景声厅',
            price:44,

          },
          {
            stime:'14.00',
            etime:'16.23',
            cate:'原版 2D',
            roomnum:'九号全景声厅',
            price:44,

          },
          {
            stime:'11.00',
            etime:'13.23',
            cate:'原版 2D',
            roomnum:'八号全景声厅',
            price:44,

          },
          {
            stime:'14.00',
            etime:'16.23',
            cate:'原版 2D',
            roomnum:'九号全景声厅',
            price:44,

          }
      ],
      eatarr:[
        {
          human:'单人',
          tit:' 32oz爆米花1桶+12oz昔果乐1杯',
          sell:'762',
          price:19,

        }
        ,
        {
          human:'双人',
          tit:' 32oz爆米花2桶+12oz昔果乐2杯',
          sell:'233',
          price:40,

        },
        {
          human:'单人',
          tit:' 32oz爆米花1桶+12oz昔果乐1杯',
          sell:'762',
          price:19,

        }
        ,
        {
          human:'双人',
          tit:' 32oz爆米花2桶+12oz昔果乐2杯',
          sell:'233',
          price:40,

        }
      ]

    }
  },
  components: {

  },
   methods: {
    change(index) {
      this.nowIndex = index;
	  }
  }
}
</script>

<style scoped>
.moviedetails{
  width: 100%;
  height: 100%;
  overflow-x:hidden;
  overflow-y:scroll;
}
.iconfont{
  color: white
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
.cdcp{
  margin-top: 100px;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;/*no*/
}
.caddress{
  position: relative;
  padding: 30px 200px 30px 30px;
  width: 100%;
  box-sizing: border-box
}
.caddress .name{
    font-size: 34px;
    line-height:  48px;
    font-weight: 700;
    color: #333;
}
.caddress .dizhi{
    margin-top: 4px;
    font-size: 26px;
    line-height: 37px;
    color: #999;
}
.ditu{
    position: absolute;
    right: 0;
    top: 50%;
    width: 140px;
    height: 62px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border-left: 1px solid #d8d8d8;/*no*/
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.ditu .iconfont{
  font-size :40px; 
}
.movieban{
  padding: 40px 30px 40px 10px;
  transform: translateZ(0);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.bag{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #40454d;
    opacity: .55;
    z-index: -1;
}
.ban{
  display: flex;
  overflow: scroll;
  justify-content: space-around
}
.ban .item{
  width: 130px;
  height: 190px;
  position: relative;
  margin-left: 15px;
  flex-shrink: 0;
}
.item img{
  height: 190px;
  width: 100%;
}
.movied{
    padding: 22px 30px;
    text-align: center;
}

.movied .name{
    height: 48px;
    line-height: 48px;
    font-size: 34px;
    color: #333;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.movied .point{
    color: #ffb400;
    font-size: 32px;
}
.point .tex{
  font-size: 20px;
}
.movied .desc{
    margin-top: 4px;
    height: 37px;
    line-height: 37px;
    font-size: 26px;
    color: #999;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.dateList{
  width: 100%;
  height: 90px;
  background: white;
  overflow-x: scroll;
  border-bottom: 1px solid #e8e8e8;/*no*/
}
.dlist{
  overflow-x: scroll;
  width: 2000px;
  
  border-bottom: 2px solid transparent;/*no*/
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
.changbox{
  min-height: 80px;

}
.changitem{
    padding: 34px 0;
    margin-left: 25px;
    border-bottom: 1px solid #e8e8e8;/*no*/
}
.changdtl{
  padding-right: 25px;
  display: flex;
}
.timebox .time{
      font-size: 40px;
    color: #333;
    line-height: 1;
    white-space: nowrap;
}
.etime{
    margin-top: 10px;
    color: #999;
    font-size: 22px;
    line-height: 2;
    white-space: nowrap;
}
.etime span{
    margin-left: 8px;
    display: inline-block;
    transform: translateY(-.1px);
}
.changdtl .room{
   margin-left: 34px;
    -webkit-box-flex: 1;
    flex: 1;
    overflow-x: hidden;
}
.roomcate{
      margin-top: 4px;
    line-height: 36px;
    font-size: 26px;
    color: #333;
    white-space: normal;
}
.roomnum{
  margin-top: 14px;
    font-size: 22px;
    color: #999;
    white-space: normal;
}
.price{
    flex: 0 1 auto;
    width: 260px;
    margin-left: 10px;
}
.price .tex{
    display: inline-block;
    line-height: 1;
    color: #f03d37;
    margin-top: 2px;
    font-size: 38px;
}
.tex .d{
  font-size: 22px;
}
.btn{
    width: 90px;
    margin-left: 4px;
    position: relative;
}
.btns{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 54px;
    line-height: 56px;
    font-size: 24px;
    background-color: #f03d37;
    color: #fff;
    border-radius: 8px;
    text-align: center;
}
.margin{
    height: 20px;
    background-color: #f0f0f0;
}
.eatcon{
      position: relative;
    margin: 0 0 0 30px;
}
.etit{
      line-height: 90px;
    height: 90x;
    font-size: 30px;
    color: #666;
    border-bottom: 1px solid #e8e8e8;/*no*/
}
.eatitem{
    cursor: pointer;
    position: relative;
    width: 100%;
    padding: 26px 0;
    overflow: hidden;
}
.eatitem img{
    
    width: 184px;
    height: 184px;
    float: left;
}
.hot{
      position: absolute;
    left: 0;
    top: 26px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    background-color: #fa5939;
    font-size: 24px;
    padding: 0 10px;
    color: #fff;
    border-bottom-right-radius: 4px;
}
.iteminfo{
      position: relative;
    margin: 0 30px 0 204px;
    height: 184px;
    overflow: hidden;
}
.iteminfo .tit{
      font-size: 28px;
    line-height: 36px;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.danren{
      display: inline-block;
    vertical-align: top;
    margin-top: 2px;
    margin-right: 14px;
    padding: 0 8px;
    font-size: 20px;
    line-height: 30px;
    height: 30px;
    background: #f90;
    border-radius: 4px;
    color: #fff;
}
.sell{
      display: inline-block;
    position: absolute;
    bottom: 68px;
    right: 0;
    line-height: 32px;
    height: 32px;
    font-size: 24px;
    color: #999;
}
.eprice{
    position: absolute;
    bottom: 0;
    left: 0;
    color: #f03d37;
    font-size: 34px;
}
.eprice span{
  font-size: 28px;
}
.ebtn{
  position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    padding: 0 16px;
    height: 54px;
    line-height: 54px;
    font-size: 24px;
    border-radius: 6px;
    color: #fff;
    background-color: #f03d37;
}
</style>