<template>
  <div id="app">
    <AppBar
      brandName="Rock-n-Roll"
      v-bind:menuItems="[{ caption: 'Home', link: '/' }, { caption: 'About', link: '/about' }]"
    />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/AppShell/AppBar.vue';

export default Vue.extend({
  components: {
    AppBar,
  },
},);
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
