<template>
  <div class="square">
    <span v-on:click="() => selectSquare()">{{value}}</span>
  </div>
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
  display: flex;
  min-width: 100px;
  min-height: 100px;
  border: 1px solid blue;
  background-color: purple;
  justify-content: center;
  align-items: center;
}
</style>
