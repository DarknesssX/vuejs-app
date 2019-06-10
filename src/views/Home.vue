<template>
  <div id="home" class="home">
    <h1>10 anime from the API</h1>
    <br />
    <GetAnime class="home-full--width" />

  </div>
</template>

<style scoped>

.home {
  margin: 1rem;
}

.home-full--width {
  margin: -1rem;
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GetAnime from '@/components/HomeComponents.vue';

@Component({
  components: { GetAnime },
})

export default class Home extends Vue {}
</script>
