import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movielist: null
    },
    mutations: {
        getConfig(state, opt) {
            state.movielist = opt
        }
    },
    actions: {
        getlist(store, opt) {
            //获取配置信息接口
            this._vm.$http.get('http://blackmamba.top:3000/movie')
                .then(res => {
                    store.commit('getConfig', res.data);
                })
        }
    },
    modules: {
          
    }
})