<template>
  <div id="home" class="home">
    
    <GetAnime />

    <h1>This is the Home Page</h1>
    <!-- Import Details of Homepage below -->
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

.home {
  margin: 1rem;
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
