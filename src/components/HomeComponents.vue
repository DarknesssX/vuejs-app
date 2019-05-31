<template>
    <div>
        <ul>
            <li>
                {{ this.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Stying of the List comes here... */
</style>

<script lang="ts">

/* Imports all components needed in this script */
import { Component, Vue, Prop } from 'vue-property-decorator';
import JikanTS from 'jikants';
import JikanWrap from '@/modules/JikanWrapper.ts';
import { AnimeList } from 'jikants/dist/src/interfaces/user/AnimeList';

/* const range = (size: number, startAt: number = 1) => [...Array(size).keys()].map((i) => (i) + startAt);
 function getAnime(cap: number) {
     const anime = range(cap).map(JikanTS.Anime.byId);
     return Promise.all(anime);
 }
 (async () => {
     const allAnime = await getAnime(100);
     console.log(allAnime(10));
     // JikanTS.Anime.byId(1).then(b => console.log(b));
 })();*/

@Component
export default class GetAnime extends Vue {

  /* Declared the "searchResult" as the JikanWrap reqeust which searches anime and orders them by ID ascended */
  private searchResult = JikanWrap.request(['search', 'anime'], {order_by: 'id', sort: 'asc'});

  /* Declares the Title of the anime (Default is empty) */
  private title: string = '';
  /* Declares the "animeList" array from the array get by "searchResult" */
  private animeList = [];

  private data() {
    /* Returns the previously declared variables above */
    return {
      animeList: [],
      title: '',
    };
  }
  /*private async mounted(): void {
  }*/
  /* Mounts all the above and sets the variables i want to pass to "Home.vue" to be shown when I call "<GetAnime />" */
  private mounted(): void  {
    (async () => {
      /* loads in the array of searchResults into  "animeList" */
      this.animeList = await this.searchResult;
      /* Logs the results of "animeList" */
      console.log(this.animeList);
      this.searchResult.then((anime) => {
        this.title = anime.results[0].title;

        /* for (const results of anime.results) {
           for (let i = 0; i <= 9; i++) {
             this.title = anime.results[i].results;
           }
         }
         this.title = (anime).title;
         console.log(anime.results); */
      });
    })();
  }
 }

</script>