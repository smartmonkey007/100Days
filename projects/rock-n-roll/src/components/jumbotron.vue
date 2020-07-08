<template>
  <h1>{{message}}</h1>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'jumbotron'
})
export default class Jumbotron extends Vue {
    @Prop() message?: string;
}

</script>
