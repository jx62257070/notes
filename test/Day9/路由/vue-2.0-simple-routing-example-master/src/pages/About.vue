<template>
  <main-layout>
    <p>About page</p>
    <button @click="goBack">后退</button>
    <button @click="goForward">前进</button>
    <button @click="clickHk">go to homework</button>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
export default {
  data() {
    return {
      timestamp: 0
    }
  },
  components: {
    MainLayout
  },
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    goForward() {
      window.history.length > 1 ? this.$router.go(1) : this.$router.push("/");
    },
    clickHk() {
      var d = new Date();
      this.timestamp = d.getTime();
      this.$router.push({
        path: `/homework/${this.timestamp}`,
        params: {
            name: 'name',
            dataObj: this.timestamp
        }
      });
    },
  }
};
</script>
