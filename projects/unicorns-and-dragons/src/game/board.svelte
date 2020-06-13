<script>
  import Square from "./Square.svelte";
  export let board = [];
</script>

<styles />

<h1>Hello world board</h1>

{#each board as square}
  <Square />
{:else}
  <h1>Game Tilt</h1>
{/each}
