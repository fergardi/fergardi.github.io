import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

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

// scroll to top and close sidebar
router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    const content = document.querySelector('.scroll')
    if (content) {
      content.scrollTop = 0
    }
    Main.close()
    next()
  })
})

// main app
let Main = Vue.component('app', App)
Main = new Main({
  el: '#app',
  router
})
