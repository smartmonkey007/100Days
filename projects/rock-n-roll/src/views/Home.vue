<template>
  <div class="home">
    <Board />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Board from '@/components/Board.vue'

export default {
  name: 'Home',
  components: {
    Board,
    HelloWorld
  }
}
</script>
