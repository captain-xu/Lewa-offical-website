// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper/dist/js/swiper.js'
import 'font-awesome/css/font-awesome.css'
import 'swiper/dist/css/swiper.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
