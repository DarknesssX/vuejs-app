<template v-for="index in 10" :key="index">
  <!--<ul>
     anime 
    <li v-for="anime in animeList.results" :key="anime">
        Retrieves the Titles of the animes in the array
        {{ anime.title }}
        Retrieves the Episodes of the specific anime
        {{ anime.Episodes }}
    </li>
    <li v-for="index in 10" v-bind:key="index">
      {{ this.title }}
    </li></ul>-->
  <div class="table-resonsive">
    <table class="table table-bordered table-hover table-dark">
        <thead class="table-header--background">
        <tr>
            <td>Name</td>
        </tr>
        </thead>
        <tbody class="table-content--background">
        <tr v-for="anime in animeList.results" :key="anime.id">
            <td> {{ anime.title }} </td>
        </tr>
        </tbody>
    </table>
  </div>

</template>

<style scoped>
/* Stying of the List comes here... */

 .table-dark td {
    border-color: #773a23;
 }
 .table-header--background {
    background: #773a23;
 }
 .table-content--background {
    background: #bd5d38;
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

  private data() {
    /* Returns the previously declared variables above */
    return {
      animeList: [{}],
    };
  }
  /* Mounts all the above and sets the variables i want to pass to "Home.vue" to be shown when I call "<GetAnime />" */
  private async mounted(): Promise<void>  {
    /* loads in the array of searchResults into  "animeList" */
    this.animeList = await this.searchResult;
    /* Logs the results of "animeList" */
    // console.log(this.animeList.results);
    /* for (let num: number = 0; num <= 9; num++) {
      this.title = this.animeList.results[num].title;
    }*/
  }
 }
</script>
