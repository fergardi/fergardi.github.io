import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import moment from 'moment'

import App from './App.vue'
import Home from './views/Home.vue'
import Info from './views/Info.vue'
import Help from './views/Help.vue'

// router
Vue.use(VueRouter)
// routes
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/help', component: Help },
    { path: '/info', component: Info },
    { path: '*', redirect: '/' }
  ]
})

// material
Vue.use(VueMaterial)
Vue.material.registerTheme({
  home: {
    primary: 'blue'
  },
  help: {
    primary: 'red'
  },
  info: {
    primary: 'green'
  }
})

// filter
Vue.filter('date', (timestamp) => {
  return moment(parseInt(timestamp)).format('D/M/YYYY HH:mm:ss')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
