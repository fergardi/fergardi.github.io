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
Vue.material.registerTheme('default', {
  primary: {
    color: 'grey',
    hue: 900
  },
  accent: 'green',
  warn: {
    color: 'red',
    hue: 900
  },
  background: 'white'
})

// filter
Vue.filter('date', (timestamp) => {
  return moment(parseInt(timestamp)).format('D/M/YYYY HH:mm:ss')
})
Vue.filter('lorem', (string) => {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
