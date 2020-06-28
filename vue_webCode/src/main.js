// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store'
import router from './router'
import './assets/css/reset.css'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import './assets/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
import 'lib-flexible/flexible.js'

Vue.use(ElementUI);
Vue.use(MintUI)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
