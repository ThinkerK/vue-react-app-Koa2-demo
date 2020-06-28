<template>
  <div class="page">
      <router-view></router-view>
      <div id="footer_bar">
          <!-- <mt-tabbar v-model="selected">
                <mt-tab-item id="外卖">
                    <span slot="icon" class="iconfont icon-74"></span>
                    外卖
                </mt-tab-item>
           </mt-tabbar> -->
           <div class="fbtn factivenpm">
                <div class="ficon">
                    <span slot="icon" class="iconfont icon-74"></span>
                </div>
                <div class="ftext">
                    电影
                </div>
            </div>
            <div class="fbtn" >
                <div class="ficon">
                    <span slot="icon" class="iconfont icon-yingyuana"></span>
                </div>
                <div class="ftext">
                    影院
                </div>
            </div>
            <div class="fbtn">
                <div class="ficon">
                    <span slot="icon" class="iconfont icon-yanchupiao"></span>
                </div>
                <div class="ftext">
                    演出
                </div>
            </div>
            <div class="fbtn">
                <div class="ficon">
                    <span slot="icon" class="iconfont icon-saishi"></span>
                </div>
                <div class="ftext">
                    赛事
                </div>
            </div>
            <div class="fbtn">
                <div class="ficon">
                    <span slot="icon" class="iconfont icon-wode"></span>
                </div>
                <div class="ftext">
                    我的
                </div>
            </div>
            
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        
    }
  },
  components: {

  }
}
</script>

<style scoped>
#footer_bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: .5px solid #d8d8d8;/*no*/
    display: flex;
}
.fbtn{
    flex: 1;
    text-align: center
}
.ficon{
    margin: 10px auto;
    vertical-align: middle
}
.factive{
    color: #f03d37;
}
#footer_bar .iconfont{
    font-size: 50px;
}

#footer_bar .mint-tab-item-icon{
    width: 0;
    height: 0
}
</style>