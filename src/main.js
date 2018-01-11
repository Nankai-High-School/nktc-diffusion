// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*
TODO LIST
TODO 使用 fullpage.js https://alvarotrigo.com/fullPage/#firstPage 实现全屏翻页(参见https://github.com/vuejs/Discussion/issues/324)
TODO 使用 waypoints http://imakewebthings.com/waypoints/ 实现滚动加载(根据滚动位置触发事件，然后使用css动画做淡入淡出效果)
 */
