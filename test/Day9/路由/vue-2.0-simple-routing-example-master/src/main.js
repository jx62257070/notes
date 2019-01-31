import Vue from 'vue'
import router from './routes'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
const app = new Vue({
  router
}).$mount('#app')
// const app = new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       const matchingView = routes[this.currentRoute]
//       return matchingView
//         ? require('./pages/' + matchingView + '.vue')
//         : require('./pages/404.vue')
//     }
//   },
//   render (h) {
//     return h(this.ViewComponent)
//   }
// })

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
