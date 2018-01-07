import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/universities',
      name: 'UniversityList',
      component: HomeView
    },
    {
      path: '/universities/:name',
      name: 'UniversityItem',
      component: HomeView
    }
  ]
})
