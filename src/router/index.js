import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
import UniversityListView from '@/views/UniversityListView'
import UniversityItemView from '@/views/UniversityItemView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/universities',
      name: 'UniversityList',
      component: UniversityListView
    },
    {
      path: '/universities/:id',
      name: 'UniversityItem',
      component: UniversityItemView
    }
  ]
})
