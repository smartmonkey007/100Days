<template>
  <div>
    <jumbotron v-bind:message="gameState.message"></jumbotron>
    <Board v-on:select="(square)=>selectSquare(square)" :squares="gameState.board"></Board>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import jumbotron from './jumbotron.vue';
import Board from './Board.vue';
import { GameState, takeTurn, newGame, startGame } from '../gameLogic';

@Component({
  name: 'game',
  components: {
    Board,
    jumbotron,
  }
})
export default class Game extends Vue {
  gameState: GameState;

  constructor () {
    super();

    this.gameState = newGame;

    setTimeout(() => {
      this.setGameState(this.gameState, startGame);
    }, 2000);
  }

  selectSquare(square: number) {
    const newTurn = takeTurn(this.gameState, square);
    this.setGameState(this.gameState, newTurn);
  }

  setGameState(current: GameState, newState: GameState) {
    current.message = newState.message;
    current.board = [...newState.board];
    current.player = newState.player;
    current.message = newState.message;
    current.result = { ...newState.result };
  }
}

</script>

<style lang="scss">
</style>
