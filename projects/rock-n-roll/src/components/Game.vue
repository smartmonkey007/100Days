<template>
  <div>
    <jumbotron v-bind:message="'Welcome player 1'"></jumbotron>
    <Board :squares="board"></Board>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import jumbotron from './jumbotron.vue';
import Board from './Board.vue';

@Component({
  name: 'game',
  components: {
    Board,
    jumbotron,
  }
})
export default class Game extends Vue {
  board = [];

  constructor () {
    super();
    this.board = Array(9).fill(0);
    for (let index = 0; index < Math.random() * 10; index++) {
      console.log('loopin');
      this.board[parseInt(`${Math.random() * 9}`)] = parseInt(`${Math.random() * 2 + 1}`);
    }
  }
}

</script>

<style lang="scss">
</style>
