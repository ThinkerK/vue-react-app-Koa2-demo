<template>
  <div class="moviepage">
      <!-- 头部 -->
      <div class="cheader">
          <div class="ch_con">
              <div class="text">电影演出赛事</div>
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
      <!-- 城市选择 -->
      <div class="topbar">
        <div class="citysel">北京</div>
        <div class="tex_cen">
            <span class="tex_left" :class="{tab_active:tab}" @click="tab_swich">正在热映</span>
            <span class="tex_right" :class="{tab_active:!tab}" @click="tab_swich1">即将上映</span>
        </div> 
        <div class="search">
            <span class="iconfont icon-suosou"></span>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="banner">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="@/assets/images/lb1.jpg" alt="">   
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/images/lb2.jpg" alt="">   
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/images/lb1.jpg" alt="">   
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/images/lb2.jpg" alt="">   
            </mt-swipe-item>
          </mt-swipe>
      </div>
      <!-- movie -->
      
        <div class="movieban" v-for="(item,index) in movielist" :key="index" @click="postParams(item)">
            <div class="movieite" >
                <div class="mban">
                    <img :src="item.logo_url" alt="">
                </div>
                <div class="mtex">
                    <div class="left">
                        <h4>{{item.name}}</h4>
                        <div>
                            <p class="point">
                                猫眼评分
                                <span>6.8</span>    
                            </p>    
                            <p class="actor">主演:{{item.actors}}</p>  
                            <p class="cinema">今天92家影院放映831场</p>
                        </div>
                    </div>
                    <div class="right">
                        <span>购票</span>
                    </div>
                </div>
            </div>
        </div>
        
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex';
export default {
  data() {
    return {
        tab:true,
        
    }
  },
  components: {

  },
  computed:{
      ...mapState(['movielist'])
  },
  methods:{
      tab_swich(){
          this.tab=true
      },
      tab_swich1(){
          this.tab=false
      },
      postParams(item){
         this.$router.push({
             path:'/moviedetails',
             query:{
                 movie_id:item.id,
                 logo_url:item.logo_url,
                 name:item.name
             }
         })
      }
  }
}
</script>

<style scoped>
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
.topbar{
    width: 100%;
    height: 88px;
    background: white;
    border-bottom: 1px solid #e6e6e6;/*no*/
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px
}
.citysel{
    width: 15%;
    height: 88px;
    line-height: 90px;
    padding-left: 30px;
    box-sizing: border-box;
}
.tex_cen{
    width: 60%;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
}
.tex_cen span{
    display: inline-block;
    height: 88px;
    line-height: 90px;
    padding:0 20px;
    box-sizing: border-box;
}
.search{
    width: 15%;
    height: 88px;
    line-height: 90px;
    display: flex;
    justify-content: space-around;
}
.search .iconfont{
    font-size: 45px;
}
.tab_active{
    border-bottom: 2px solid #ef4238;/*no*/
    color: #ef4238;
}
.banner{
    width: 100%;
    height: 236px;
}
.banner img{
    width: 100%
}
.movieban{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 0;
}
.movieite{
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;/*no*/ 
    display: flex;
    justify-content: space-between;
}
.mban img{
    height: 180px;
}
.mtex{
    width: 560px;
    display:flex;
}
.mtex .left{
    width: 414px;

}
.mtex h4{
    font-size: 34px;
    color: #333;
    font-weight: 700;
    margin-bottom: 14px;
}
.mtex .left div{
    font-size: 26px;
    color: #666;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.mtex .left div p{
    line-height: 41px;
}
.left .point span{
    font-weight: 700;
    color: #faaf00;
    font-size: 30px;
}
.mtex .right{
    display: flex;
    align-items: center;
    height: 100%;
    margin-left:45px; 
}
.mtex .right span{
    width: 94px;
    height: 54px;
    line-height: 56px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 8px;
    white-space: nowrap;
    font-size: 30px;
    cursor: pointer;
}
</style>