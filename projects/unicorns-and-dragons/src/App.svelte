<script>
  import AppBar from "./app/appBar.svelte";
  import Board from "./game/board.svelte";
  import Dashboard from "./game/Dashboard.svelte";

  let name = `Unicorns and Dragons`;
</script>

<AppBar title={name} />

<Dashboard />
<Board board={[0, 0, 0]} />

<h1>hello {name}!</h1>
