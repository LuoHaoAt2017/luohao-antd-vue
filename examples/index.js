import Vue from 'vue';
import ref from 'vue-ref';
import App from './App.vue';
import router from './routes';
import LuoHaoAntd from 'luohao-antd-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(ref, { name: 'ant-ref' });
Vue.use(LuoHaoAntd);
export default new Vue({
  el: '#app',
  router: router,
  render(h) {
    return h(App);
  }
});