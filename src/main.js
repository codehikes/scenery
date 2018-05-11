import jquery from 'jquery'; // eslint-disable-line no-unused-vars
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from '$theme/App';
import router from '$theme/router';
import Scenery from './lib';
import SceneryConfig from './../scenery';

Vue.use(Scenery, SceneryConfig);
Vue.use(VueScrollTo);
// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease-in-out',
  offset: 0,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
