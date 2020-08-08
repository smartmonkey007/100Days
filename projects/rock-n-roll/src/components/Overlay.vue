<template>
  <div v-if="show" class="overlay">
    <h1>{{message}}</h1>

    <button v-on:click="() => newGame()" class="new-game-button">New Game</button>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Emit } from 'vue-property-decorator';

@Component({
  name: 'overlay'
})
export default class Overlay extends Vue {
    @Prop() show?: boolean;
    @Prop() message?: string;
    @Prop() state?: string;

    @Emit('new-game')
    newGame() {
      return null;
    }
}

</script>

<style lang="scss">
.overlay {
  display: grid;
  align-content: center;
  padding-bottom: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 0, 200, 0.78);
}

.new-game-button {
  max-width: 200px;
  padding: 20px;
  margin: auto;
}
</style>
