<template>
  <div>
    <h1>Player 1 turn</h1>
    <Board :squares="Array(9).fill(0)"></Board>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import Board from './Board.vue';

@Component({
  name: 'game',
  components: {
    Board,
  }
})
export default class Game extends Vue { }

</script>

<style lang="scss">
</style>
