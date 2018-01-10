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
使用说明
请编写/static/data/universities.json来增加大学
在/static/data目录下可以增加图片或者视频
中如果要添加cover，cover参数可以写成如下形式/static/data/pku-cover.jpg

部署说明
请使用Apache2部署项目，启用rewrite mod并且在部署项目的目录下创建如下文件来实现Pretty Urls，内容如下
.htaccess
RewriteEngine On
# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html

TODO LIST
TODO 使用 fullpage.js https://alvarotrigo.com/fullPage/#firstPage 实现全屏翻页(参见https://github.com/vuejs/Discussion/issues/324)
TODO 使用 waypoints http://imakewebthings.com/waypoints/ 实现滚动加载(根据滚动位置触发事件，然后使用css动画做淡入淡出效果)
TODO 继续实现下列大学
tju 天津大学
nku 南开大学
xjtu 西安交通大学
ustc 中国科学技术大学
csu 中南大学
hit 哈尔滨工业大学
bnu 北京师范大学
sdu 山东大学
xmu 厦门大学
seu 东南大学
toju 同济大学
buaa 北京航空航天大学
dlut 大连理工大学
neu 东北大学
scut 华南理工大学
ecnu 华东师范大学
bit 北京理工大学
npu 西北工业大学
 */
