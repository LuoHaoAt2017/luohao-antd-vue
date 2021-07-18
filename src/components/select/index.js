import { Select } from 'ant-design-vue';

const LHSelect = {
  name: 'LHSelect',
  functional: true,
  props: {
    ...Select.props
  },
  render(h, context) {
    const children = [];
    const { props, slots } = context;
    return h(Select, {
      props: props
    }, children);
  }
}

LHSelect.install = function(Vue) {
  Vue.component('LHSelect', Select);
  Vue.component('LHSelectOption', Select.Option);
  Vue.component('LHSelectOptionGroup', Select.OptGroup);
}

LHSelect.Option = Select.Option;
LHSelect.OptGroup = Select.OptGroup;

export default LHSelect;