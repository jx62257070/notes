import demo from "./demo.vue";

var demo = new Vue({
  el: "#app",
  components: { demo },
  template: "<demo ></demo>",
  data () {
      return {
        message: 'aaaa' 
      }
  },
});
