export default {
  install(Vue, options) {
    return Vue.prototype.$scenery = options; // eslint-disable-line 
  },
};
