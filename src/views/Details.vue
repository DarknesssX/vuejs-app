<template>
  <div id="detail" class="detailpage">
    <h1>This is the detail page</h1>
    <br />
    <GetAnimeDetails class="details-full--width" />
  </div>
</template>

<style scoped>

  .detailpage {
    margin: 1rem;
  }

  .details-full--width {
    margin: -1rem;
  }

  @media screen and (min-width: 1280px) {
    #detail {
      padding-bottom: 16.05rem;
    }
  }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GetAnimeDetails from '@/components/DetailsComponents.vue';

@Component({
  components: { GetAnimeDetails },
})

export default class Detail extends Vue {}
</script>
