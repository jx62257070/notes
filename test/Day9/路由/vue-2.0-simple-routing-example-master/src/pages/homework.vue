<template>
  <main-layout>
    <p>Page not Homework</p>
    <div>时间戳为：<span>{{timeHk}}</span></div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
      name:'homework',
      data(){
          return{
            timeHk:0, 
          }

      },
    components: {
      MainLayout
    },
    // methods: {
    //   getParams () {
    //     // 取到路由带过来的参数 
    //     let routerParams = this.$route.params.dataobj;
    //     console.log(routerParams);
        
    //     // 将数据放在当前组件的数据内
    //     this.timeHk = routerParams;
        
    //   }
    // },
    created () {

        let routerParams = this.$route.params.timestamp;
        // 将数据放在当前组件的数据内
        this.timeHk = routerParams;
    },
    watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    }
  }
</script>