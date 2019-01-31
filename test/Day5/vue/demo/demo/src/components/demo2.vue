<template>
    <div>
         <div class="box">
          <p>随机数字</p>
          <input type="text" placeholder="请输入上限" v-model="limit">
          <p class="exp">{{message}}</p>
          <input type="text"   v-model='value' >
          <input type="button" value="输出随机数字"  class="btn" @click="math()">
          <input type="button" value="清空" class="btn" @click="clear">
         </div>
        </div>
</template>
<script>
export default {
  name: "demo2",
  data() {
    return {
      value: "",
      limit: "",
      message: "请输入数字"
    };
  },
  methods: {
    math() {
      this.message = `0~${this.limit}的随机整数如下`;
      this.value = Math.round(Math.random() * this.limit);
    },
    clear() {
      this.message = `请输入数字`;
      this.limit = "";
      this.value = "";
    }
  }
};
</script>
<style scoped>
@import "./css/demo2.css";
</style>

