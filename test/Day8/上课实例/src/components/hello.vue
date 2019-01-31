<template>
    <div>
        <star :styleobj="styleobj" @countchange="countchange">
            <div>Father</div>
        </star>
        {{message}}{{count+soncount}}
        <button v-on:click="handleclick">click me</button>
        <div class="box" v-if="count%2!=0"></div>
        <div class="box" v-show="count%2!=0"></div>
        
        <h1>{{color}}</h1>
        <input type="text"  v-model="color" >
        <input type="text"  v-model="width" >
        <input type="text"  v-model="height" >
       
        <!-- <div v-for="(item,index) in arr2"  class="box" :key="index" >
        {{item.name}}
        </div> -->

        <div v-for="item in arr3" :key="item" :class="['box',item]">{{item}}</div>
        </div>
</template>

<script>
import  star from "./star";

export default {
  name: "hello",
  components:{
      star
  },
  data() {
    return {
      message: "Hello Vue!",
      count: 0,
      soncount:0,
      arr: [1, 2, 3],
      color:'123',
      width:100,
      height:100,
      
    //   styleobj:{},
      arr2: [{ name: 1 }, { name: 2 }, { name: 3 }],
      arr3:['red','blue','yellow']
    };
  },
  created() {
    console.log("124");
  },
  methods: {
    handleclick() {
      this.count++;
    },
    handleChange(){
        this.styleobj.background = '#'+this.color;
        console.log(this.color)
    },
    countchange(val){
        console.log(val);
        this.soncount = Number(val)
        
    }
  },
  computed:{
      styleobj(){
          return {
              background:'#'+this.color,
              width:this.width+'px',
              height:this.height+'px'
          }
      }
  },
//   watch:{
//       color(val){
//           console.log(val)
//           this.styleobj.background = '#'+val
//       },
//       width(val){
//           console.log(val)
//           this.styleobj.width = val+'px'
//       }
//   },
  mounted() {
    // console.log(this.$refs);
    // this.$refs.input.focus();
  }
};
</script>

<style>
h1 {
  color: #88eeaa;
}
.box{
    width: 100px;
    height: 100px;
    transition: all 1s;
}
.red{
    background: red;
}
.blue{
    background: blue;
}
.yellow{
    background: yellow;
}
</style>
