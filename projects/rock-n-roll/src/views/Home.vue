<template>
  <div class="home">
    <Board />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">

import Board from '@/components/Board.vue';

export default {
  name: 'Home',
  components: {
    Board,
  }
};
</script>
