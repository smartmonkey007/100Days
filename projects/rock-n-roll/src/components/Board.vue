<template>
  <div class="board-container">
    <div class="board-square" v-for="(square, index) in squares" :key="index">
      <Square :value="square" v-on:select="()=>selectSquare(index)"></Square>
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

  selectSquare(square: number) {
    this.$emit('select', square);
  }
}
</script>

<style lang="scss">
.board-container {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  user-select: none;
}

.board-square {
  flex: 1 0 30%;
}
</style>
