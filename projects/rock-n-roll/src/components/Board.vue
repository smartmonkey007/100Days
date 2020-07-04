<template>
  <div class="board-container">
    <div class="board-square" v-for="(square, index) in squares" :key="index">
      <Square :value="square"></Square>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';
import Square from './Square.vue';

@Component({
  name: 'board',
  components: {
    Square,
  }
})
export default class Board extends Vue {
  @Prop() private squares!: [];
}
</script>

<style lang="scss">
.board-container {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  // flex-basis: 33%;
}

.board-square {

  flex: 1 0 30%;
}
</style>
