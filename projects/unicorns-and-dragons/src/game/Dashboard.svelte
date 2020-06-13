<script>
  export let playerName = "";
</script>

<style>
  div {
    width: 100%;
    text-align: center;
  }
</style>

<div>
  {#if playerName}
    <h2>It is {playerName} Players turn.</h2>
  {:else}
    <h2>Game Paused</h2>
  {/if}
</div>
