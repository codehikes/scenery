import Vue from 'vue';
import Router from 'vue-router';
import Scenery from '@/components/Scenery';

Vue.use(Router);

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/app',
      name: 'Scenery',
      component: Scenery,
    },
  ],
});
