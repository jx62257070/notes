import about from './pages/About.vue'
import notfound from './pages/404.vue'
import home from './pages/Home.vue'
import homework from './pages/homework.vue'

// import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)
const routes = [
  { path: '/', component: home },
  { path: '/homework/:timestamp', component: homework },
  { path: '/about', component: about },
  { path: '/notfound', component: notfound }
]

const router=new VueRouter({
  routes
})

export default router;
