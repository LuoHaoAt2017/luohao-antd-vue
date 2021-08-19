import LHSelect from './components/select/index';
import LHPagination from './components/pagination/index';
const items = [
  LHSelect,
  LHPagination,
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
  LHPagination
}