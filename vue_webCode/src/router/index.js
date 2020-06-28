import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import MoviePage from '@/components/Home/MoviePage'
import moviedetails from '@/components/movie_details/movie_details'
import cinema from '@/components/cinema_details/cinema'


Vue.use(Router)

export default new Router({
  base:"/maoyan/",
  routes: [
    {
     path:'/',
     redirect:'/Home/MoviePage'
    },
    {
      path:'/Home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'MoviePage',
          component:MoviePage
        }
      ]
    },
    {
      path:'/moviedetails',
      name:'moviedetails',
      component:moviedetails
    },

    {
      path:'/cinema',
      name:'cinema',
      component:cinema
    }
  ]
})
