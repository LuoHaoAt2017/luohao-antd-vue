import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';
import LHAntdVue from 'luohao-antd-vue';

Vue.use(LHAntdVue);

new Vue({
  el: '#app',
  router: router,
  render(h) {
    return h(App);
  }
});