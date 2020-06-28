<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'App',
  methods:{
      ...mapActions(["getlist"])
  },
  created(){
    this.getlist();
  }
}

</script>


<style>
html,body{
    height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#ffffff;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
}


</style>
