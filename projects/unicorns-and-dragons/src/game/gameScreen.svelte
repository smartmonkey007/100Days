<script>
  export let message = "";
  export let avatar = "";
</script>

<style>
  .game-screen {
    position: absolute;
    height: calc(100% - 70px);
    width: 100%;
    background-color: rgba(89, 123, 161, 0.753);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding-top: 150px; */
  }
</style>

{#if avatar !== ''}
  <div>{avatar}</div>
{/if}

<div class="game-screen">

  <h1>{message}</h1>
  <button on:click>New Game</button>

</div>
