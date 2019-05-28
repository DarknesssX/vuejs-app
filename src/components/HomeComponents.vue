<template v-for="allAnime in 10">
    <ul>
        <li>
            {{ allAnime }}
        </li>
    </ul>
</template>

<style scoped>

</style>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
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

export default class TenAnime extends Vue { }

</script>
