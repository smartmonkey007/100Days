<template>
  <div>
    <h1>Board placeholder</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Board extends Vue {
  @Prop() private squares!: [];
}
</script>
