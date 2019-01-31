<template>
    <div>
        <p>原数组：</p>
        <p>{{oldArray}}</p>
        <p>现数组：</p>
        <p>{{thisArray}}</p>
        </div>
</template>
<script>
export default {
  name: "demo3",
  data() {
    return {
      thisArray: ["80", "16", "50", "6", "100", "1", "111", "12"],
      oldArray:  ["80", "16", "50", "6", "100", "1", "111", "12"]
    };
  },
  created:function(){
    this.thisArray.sort(sortNum)
  }
  
};
function sortNum(a,b){
  return b-a;
}
</script>
