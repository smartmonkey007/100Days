<script>
  import { createEventDispatcher } from "svelte";
  import Square from "./Square.svelte";
  export let board = [];
  export let squareSize = 1;

  const turn = createEventDispatcher();
  function takeTurn(square) {
    turn("turn", { square });
  }
</script>

<style>
  .board {
    display: flex;
    justify-content: center;
    /* align-content: center; */
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
  }

  .square {
    display: flex;
    padding: 10px;
  }
</style>

<div class="board">
  {#each board as player, ind}
    <div class="square" style={`min-width: ${Math.floor(100 / squareSize)}%`}>
      <Square {player} on:click={() => takeTurn(ind)} />
    </div>
  {:else}
    <h1>Game Tilt</h1>
  {/each}

</div>
