import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import RevaNow from 'views/RevaNow'
import LewaOS from 'views/LewaOS'
import AboutUs from 'views/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/revanow/:id',
      name: 'RevaNow',
      component: RevaNow
    },
    {
      path: '/lewaos/:id',
      name: 'LewaOS',
      component: LewaOS
    },
    {
      path: '/aboutus/:id',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
