<template v-for="index in 10" :key="index">
  <div class="table-resonsiven full-width">
    <table class="table table-bordered table-hover table-dark">
      <thead class="table-header--background">
        <tr>
          <td>Anime Title <button @click="setColumn('title')">Sort</button> </td>
        </tr>
      </thead>
      <tbody id="table-content" class="table-content--defaultbg">
        <tr class="table-content--background" v-for="anime in sortedAnimeList" :key="anime.id" @click="goToDetails()" >
          <td> {{ anime.title }} </td>
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
export default class GetAnime extends Vue {
  /* Declared the "searchResult" as the JikanWrap reqeust which searches anime and orders them by ID ascended */
  private searchResult = JikanWrap.request(['search', 'anime'], {order_by: 'id', sort: 'asc', limit: 10});
  /* Declares an empty array called "animeList" which will */
  private animeList: any = [{}];
  /* Declares an empty string called column for sorting */
  private column: string = '';
  /* Sorts all the results in this.animeList if this.animeList has been initialized */
  get sortedAnimeList() {
    if (this.animeList) {
      return this.animeList
        .sort((a: any, b: any) => (a[this.column] > b[this.column]) ?
          1 : ((b[this.column] > a[this.column]) ? -1 : 0));
    }
    return;
  }
  /* pushes the page to the Details page when one of the results are tapped or clicked on */
  private goToDetails() {
    this.$router.push({path: '/details'});
  }

  private setColumn(column: string) {
    this.column = column;
  }
  /* Mounts all the above and sets the variables i want to pass to "Home.vue" to be shown when I call "<GetAnime />" */
  private async mounted(): Promise<void> {
    /* loads in the array of searchResults into  "animeList" */
    const t = await this.searchResult;
    this.animeList = t.results;
  }
}

</script>
