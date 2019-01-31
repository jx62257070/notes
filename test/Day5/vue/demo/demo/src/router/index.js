import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '../components/demo1'
import demo2 from '../components/demo2'
import demo3 from '../components/demo3'
import demo4 from '../components/demo4'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'demo1',
      component:demo1
    },
    {
      path:'/demo2',
      name:'demo2',
      component:demo2
    },
    {
      path:'/demo3',
      name:'demo3',
      component:demo3
    },
    {
      path:'/demo4',
      name:'demo4',
      component:demo4
    }
  ]
})
