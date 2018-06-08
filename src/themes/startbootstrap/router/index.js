import Vue from 'vue';
import Router from 'vue-router';
import Scenery from '$theme/templates/Scenery';

Vue.use(Router);

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Scenery',
      component: Scenery,
    },
  ],
});
