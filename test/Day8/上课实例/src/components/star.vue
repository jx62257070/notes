<template>
<div>
    <slot></slot>
<div class="box" :style="styleobj">
    {{count}}
</div>
<input type="text" v-model="count">
</div>
    
</template>

<script>
export default {
    props:{
        styleobj:{
            type:Object
        }
    },
    data(){
        return {
            count:0,
            message:'star'
        }
    },
    watch:{
        count(val){
            this.$emit('countchange',val)
        }
    }
}
</script>

<style>
.box{
    color:#fff;
    font-size: 30px;
}
</style>
