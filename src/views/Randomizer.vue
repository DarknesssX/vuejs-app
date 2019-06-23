<template>
  <div id="randomizer" class="randomizer">
    <h1>This is the Randomizer Page</h1>
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

  #randomizer {
    padding-bottom: 20.85rem;
  }
  @media screen and (min-width: 360px) and (max-width: 767px) {
    #randomizer {
      padding-bottom: 23.85rem;
    }
  }
  @media screen and (min-width: 768px){
    #randomizer {
      padding-bottom: 30.85rem;
    }
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
