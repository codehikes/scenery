export default {
  install(Vue, options) {
    return Vue.prototype.$scenery = options.meta; // eslint-disable-line 
  },
};
