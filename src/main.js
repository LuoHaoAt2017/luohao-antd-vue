import Vue from 'vue';
import App from './App.vue';

import { DatePicker, Calendar, Icon, Popover } from 'ant-design-vue';

Vue.use(Calendar);
Vue.use(DatePicker);
Vue.use(Icon);
Vue.use(Popover);

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  }
});