<template>
    <div>
    <div class="box">
        <p>按钮控制文字显示</p>
        <div class="title">
        <p v-if=state>{{message}}</p>
        </div>
        <input type="button" value="显示" @click="show">
        <input type="button" value="隐藏" @click="hide">
        <input type="button" value="显示/隐藏" @click="change">
    </div>
        </div>
</template>
<script>
export default {
  name: "demo1",
  data() {
    return {
      message: `大咖吼，我系渣渣辉。`,
      state: true
    };
  },
  methods: {
    show() {
      this.state = true;
    },
    hide() {
      this.state = false;
    },
    change() {
      this.state = !this.state;
    }
  }
};
</script>
<style scoped>
@import "./css/demo1.css";
</style>

