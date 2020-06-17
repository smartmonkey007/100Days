<script>
  import { blur, fade } from "svelte/transition";

  import AppBar from "./app/appBar.svelte";
  import Board from "./game/board.svelte";
  import Dashboard from "./game/Dashboard.svelte";
  import GameScreen from "./game/GameScreen.svelte";

  import {
    board,
    squareSize,
    avatars,
    currentPlayer,
    takeTurn,
    evalateGame,
    newGame,
    winner,
    message
  } from "./GameState.js";

  let name = `Unicorns and Dragons 🦄 ⚔ 🐲`;

  function onTakeTurn(board, square, player) {
    evalateGame(board, square, player);
  }

  function doNewGame() {
    newGame();
  }
</script>

<style>
  .app-container {
    background-color: rgb(223, 230, 236);
    height: 100%;
    user-select: none;
  }

  .game-container {
    margin: auto;
    height: 450px;
    width: 450px;
    box-sizing: border-box;
  }
</style>

<div class="app-container">
  <AppBar title={name} />

  {#if $winner !== 0}
    <div class="" in:fade={{ duration: 500, delay: 1500 }}>
      <GameScreen message={$message} on:click={doNewGame} />
    </div>
  {:else}
    <div class="game-container" out:blur={{ duration: 1000 }}>
      <Dashboard playerName={$avatars[$currentPlayer].icon} />
      <Board
        class="board"
        board={$board}
        squareSize={$squareSize}
        on:turn={square => onTakeTurn($board, square.detail.square, $currentPlayer)} />
    </div>
  {/if}

</div>
