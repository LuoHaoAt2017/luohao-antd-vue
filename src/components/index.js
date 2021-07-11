/* eslint-disable */
import DateRangePicker from './date-range-picker.vue';

const items = [
  DateRangePicker
];

const install = function(Vue) {
  items.forEach(elem => {
    Vue.component(elem.name, elem);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  DateRangePicker
}