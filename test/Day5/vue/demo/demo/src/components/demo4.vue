<template>
    <div>
       <div class="box">
        <h3>输入：</h3>
        <input type="text" placeholder="请输入内容" v-model="content">
        <input type="button" value="添加" @click="add">
        <input type="button" value="删除第一条" @click="delFirst">
        <input type="button" value="删除最后一条" @click="delLast">
        <input type="button" value="内容转换成大写字母" @click="upperCase">
        <input type="button" value="内容转换成小写字母" @click="lowerCase">
        <input type="button" value="0~输入内容之间的随机数字" @click="randomNum">
        <input type="button" value="字体变大(最大40px)" @click="fontBig">
        <input type="button" value="字体缩小(最小16px)" @click="fontSma">
    </div>
      <div class="box2">
        <p v-for="item in message" v-bind:style="messageCss">{{item.value}}</p>
      </div>
    </div>
</template>
<script>
export default {
  name: "demo4",
  data() {
    return {
      message: [],
      content: "",
      messageCss: {
        sizeData: "16",
        fontSize: "16px"
      }
    };
  },
  methods: {
    add() {
      var a = {
        value: this.content
      };
      this.message.push(a);
      this.content = "";
    },
    delFirst() {
      this.message.shift();
    },
    delLast() {
      this.message.pop();
    },
    upperCase() {
      this.message.forEach(function(item) {
        item.value = item.value.toupperCase();
      });
    },
    lowerCase() {
      this.message.forEach(function(item) {
        item.value = item.value.tolowerCase();
      });
    },
    randomNum() {
      var Num='';
      if (this.content == "" || isNaN(this.content)) {
        alert("请输入数字！");
        this.content = "";
      } else {
        console.log(/^\d+$/.test(this.content));
        
        Num = {
          value: Math.round(Math.random() * this.content)
        };
      }
      this.message.push(Num);
      this.content = "";
    },
    fontBig() {
      if (this.messageCss.sizeData == 40) {
        this.messageCss.fontSize = "40px";
      } else {
        this.messageCss.sizeData++;
        this.messageCss.fontSize = `${this.messageCss.sizeData}px`;
      }
    },
    fontSma() {
      if (this.messageCss.sizeData == 16) {
        this.messageCss.fontSize = "16px";
      } else {
        this.messageCss.sizeData--;
        this.messageCss.fontSize = `${this.messageCss.sizeData}px`;
      }
    }
  }
};
</script>
<style scoped>
@import "./css/demo4.css";
</style>

