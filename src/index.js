import LHSelect from './components/select';

const items = [
  LHSelect
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
  LHSelect
}