<script>
  export let title = "";
</script>

<style>
  header {
    height: 70px;
    background-color: #202020;
    color: white;
    display: flex;
    align-content: center;
  }

  .app-bar {
    padding-top: 10px;
    padding-left: 25px;
    font-weight: bolder;
    font-size: xx-large;
  }
</style>

<header>
  <span class="app-bar">{title}</span>
</header>
