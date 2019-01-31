<template>
  <div id="app">
    <router-link to="/">Go to demo1</router-link>
    <router-link to="/demo2">Go to demo2</router-link>
    <router-link to="/demo3">Go to demo3</router-link>
    <router-link to="/demo4">Go to demo4</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


