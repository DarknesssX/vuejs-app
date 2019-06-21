<template v-for="index in 10" :key="index">
  <div class="table-resonsiven full-width">
    <table class="table table-bordered table-hover table-dark">
      <thead class="table-header--background">
        <tr>
          <td>Anime Title <button @click="GetNewRandom()">Get new random</button> </td>
        </tr>
      </thead>
      <tbody id="table-content" class="table-content--defaultbg">
        <tr class="table-content--background">
          <td> {{ this.animeList.title }} </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>
/* Stying of the List comes here... */
  .full-width {
      margin: 0;
  }

  .table-dark td {
      border-color: #e56f44;
  }

  #table-content a {
    font-weight: bold;
    color: rgba(255,255,255,0.5);
    margin: 1rem;
  }

  .table-header--background {
      background: linear-gradient( #bd5d38, #e56f44);
  }

  .table-content--defaultbg {
      background: #bd5d38;
  }

  .table-content--background {
      background: rgba(255,255,255,0.01);
  }
</style>

<script lang="ts">

/* Imports all components needed in this script */
import { Component, Vue, Prop } from 'vue-property-decorator';
import JikanTS from 'jikants';
import JikanWrap from '@/modules/JikanWrapper.ts';
import { AnimeList } from 'jikants/dist/src/interfaces/user/AnimeList';

@Component
export default class GetRandom extends Vue {
  /* Declared the "searchResult" as the JikanWrap reqeust which searches anime and orders them by ID ascended */
  private searchResult = JikanWrap.request(['search', 'anime'], {order_by: 'id', sort: 'asc', limit: 1});
  /* Declares an empty array called "animeList" which will */
  private animeList: any = [{}];
  /* Declares an empty string called column for sorting */
  private column: string = '';
  /* generates a random number that will be used to retrieve a random Anime from the API */
  private getRanomdId(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private GetNewRandom() {
      if (this.animeList) {
          (async () => {
            JikanWrap.request(['anime', this.getRanomdId(1, 10000)])
              .then((anime) => {
                this.animeList = anime;
              });
          })();
      }
  }
  /* Mounts all the above and sets the variables i want to pass to "Home.vue" to be shown when I call "<GetAnime />" */
  private async mounted(): Promise<void> {
    /* loads in the array of searchResults into  "animeList" */
    (async () => {
      JikanWrap.request(['anime', this.getRanomdId(1, 10000)])
        .then((anime) => {
          console.log(anime);
          this.animeList = anime;
        });
    })();
    // const t = await this.searchResult;
    // this.animeList = t.results;
  }
}

</script>
