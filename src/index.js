import Select from './components/select';
import Button from './components/button';
import Tooltip from './components/tooltip';
import Popover from './components/popover';

const items = [
  Select, Button, Tooltip, Popover
];

const install = function (Vue) {
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
  Button,
  Select,
  Tooltip,
  Popover
}