import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Details from './views/Details.vue';
import Randomizer from './views/Randomizer.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
    },
    {
      path: '/randomizer',
      name: 'randomizer',
      component: Randomizer,
    },
  ],
});
export default router;
