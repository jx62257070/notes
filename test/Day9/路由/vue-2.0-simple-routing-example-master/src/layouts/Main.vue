<template>
  <div class="container">
    <ul>
      <li>
        <!-- <v-link href="/">Home</v-link>
        <v-link href="/about">About</v-link> -->
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
import VLink from "../components/VLink.vue";

export default {
  components: {
    VLink
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 15px 30px;
  background: #f9f7f5;
}
</style>
