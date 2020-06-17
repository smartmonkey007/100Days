<script>
  import { avatars } from "../GameState.js";
  export let player = 0;
</script>

<style>
  .square {
    width: 100%;
    height: 100%;
    background-color: red;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 10px;
  }

  .avatar {
    font-size: xx-large;
  }
</style>

<div
  class="square avatar"
  style={`background-color: ${$avatars[player].color}`}
  on:click>
  {$avatars[player].icon}
  <br />
</div>
