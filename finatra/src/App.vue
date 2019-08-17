<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
