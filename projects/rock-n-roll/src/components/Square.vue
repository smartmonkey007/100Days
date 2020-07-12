<template>
  <div class="square" v-on:click="() => selectSquare()">
    <span class="player-square">{{getSquareAvatar(value)}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';
import { getAvatar } from '../gameLogic';

@Component
export default class Square extends Vue {
  @Prop() value?: string;

  selectSquare() {
    this.$emit('select');
  }

  getSquareAvatar(player: number) {
    return getAvatar(player);
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

.player-square {
  font-size: 4vw;
}
</style>
