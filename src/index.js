import LHSelect from './components/select/index';

const items = [
  LHSelect, 
];

const install = function (Vue) {
  items.forEach(item => {
    item.install(Vue);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  LHSelect,
}