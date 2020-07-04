<template>
  <div v-on:click="() => selectSquare()" class="square">{{value}}</div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue, } from 'vue-property-decorator';

@Component
export default class Square extends Vue {
  @Prop() value?: string;

  selectSquare () {
    Emit('select-square');
  }
}
</script>

<style lang="scss">
.square {
  min-width: 100px;
  min-height: 100px;
  border: 1px solid blue;
  background-color: purple;
}
</style>
