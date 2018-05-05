import Vue from 'vue';
import Router from 'vue-router';
import Scenery from '$theme/components/Scenery';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Scenery',
      component: Scenery,
    },
  ],
});
