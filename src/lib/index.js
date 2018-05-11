export default {
  install(Vue, options) {
    return Vue.prototype.$scenery = options.scenery; // eslint-disable-line 
  },
};
