<template>
  <div class="game">
    <overlay
      v-bind:show="gameState.player === 0"
      v-bind:message="gameState.message"
      v-on:new-game="() => startNewGame()"
    ></overlay>
    <jumbotron v-bind:message="gameState.message"></jumbotron>
    <Board v-on:select="(square)=>selectSquare(square)" :squares="gameState.board"></Board>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import jumbotron from './jumbotron.vue';
import Board from './Board.vue';
import Overlay from './Overlay.vue';
import { GameState, takeTurn, newGame, startGame } from '../gameLogic';

@Component({
  name: 'game',
  components: {
    Board,
    jumbotron,
    Overlay,
  }
})
export default class Game extends Vue {
  gameState: GameState;

  constructor () {
    super();

    this.gameState = newGame;
  }

  startNewGame() {
    this.setGameState(this.gameState, startGame);
  }

  selectSquare(square: number) {
    const newTurn = takeTurn(this.gameState, square);
    this.setGameState(this.gameState, newTurn);
    if (this.gameState.result?.isWinner || this.gameState.result?.isCats) {
      setTimeout(() => {
        this.gameState.player = 0;
      }, 1000);
    }
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
.game {
  user-select: none;
}
</style>
