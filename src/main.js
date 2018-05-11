import jquery from 'jquery'; // eslint-disable-line no-unused-vars
import Vue from 'vue';
import App from '$theme/App';
import router from '$theme/router';
import Scenery from './lib';
import ConfigTheme from './../config/.env';

Vue.use(Scenery, ConfigTheme);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
