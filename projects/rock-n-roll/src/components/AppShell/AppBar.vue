<template>
  <div class="app-bar">
    <span class="app-name">{{brandName || ''}}</span>
    <div class="menu-links">
      <div v-for="menuItem in menuItems" :key="menuItem.link">
        <router-link class="menu-link" v-bind:to="menuItem.link">{{menuItem.caption}}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, } from 'vue-property-decorator';

export class MenuItem {
  caption?: string;
  link?: string;
}

@Component
export default class AppBar extends Vue {
  @Prop() brandName?: string;
  @Prop() menuItems?: MenuItem[];
}

</script>

<style lang="scss" scoped>
.app-name {
  font-size: xx-large;
  align-self: center;
}

.menu-links {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu-link {
  background-color: pink;
  padding: 10px;
  margin: 10px 30px;
  text-decoration: none;
  font-size: larger;
  font-weight: bolder;

  &.router-link-exact-active {
    color: teal;
  }
}

.app-bar {
  box-sizing: border-box;
  padding-left: 15px;
  width: 100%;
  background-color: rgb(243, 3, 135);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
}
</style>
