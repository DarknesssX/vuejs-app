<template>
  <div id="randomizer" class="randomizer">
    <h1>this is a Randomizer Page</h1>
    <br />
    <GetRandom class="randomizer-full--width" />
  </div>
</template>

<style scoped>

.randomizer {
  margin: 1rem;
}

.randomizer-full--width {
  margin: -1rem;
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GetRandom from '@/components/RandomizerComponents.vue';

@Component({
  components: { GetRandom },
})

export default class Randomizer extends Vue {}
</script>
