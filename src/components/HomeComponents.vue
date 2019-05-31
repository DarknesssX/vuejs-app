<template v-for="allAnime in 10">
    <div>
        <ul>
            <li>
                <!--{{ allAnime }}-->
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import JikanTS from 'jikants';

const range = (size: number, startAt: number = 1) => [...Array(size).keys()].map((i) => (i) + startAt);

function getAnime(cap: number) {
    const anime = range(cap).map(JikanTS.Anime.byId);
    return Promise.all(anime);
}

(async () => {
    const allAnime = await getAnime(100);
    console.log(allAnime[10]);
})();

@Component
export default class GetAnime extends Vue {

    private title: string = '';

    private mounted() {
        getAnime(10).then((response) => {
            console.log(response);
        });
    }
 }

</script>
