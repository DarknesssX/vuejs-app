<template>
  <div id="randomizer" class="randomizer">
    <h1>this is a Randomizer Page</h1>
    <!-- Import component randomizer below -->

    <GetRandom class="randomizer-full--width" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
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
