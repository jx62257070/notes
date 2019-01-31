import Vue from "vue/dist/vue.js";

import hello from "./components/hello.vue";

var app = new Vue({
  el: "#app",
  components: { hello },
  template: "<hello ></hello>"
});
