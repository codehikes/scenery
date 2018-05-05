import Vue from 'vue';
import Router from 'vue-router';
import Scenery from '@/components/Scenery';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'Scenery',
      component: Scenery,
    },
  ],
});
