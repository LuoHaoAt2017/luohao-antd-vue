import { Select } from 'ant-design-vue';
import { getSlotChildren } from '@/utils/vnode';
// <lh-select ref="select" title="hello select" label="select" messgae="come back"></lh-select>
// 如果设置了
// props: {
//   title: {

//   },
//   label: {

//   },
//   messgae: {

//   }
// },
// title, label, messgae 被 props 接收，
// 如果没有设置 props，title, label, messgae 被 attrs 接收。

// 在普通组件中，没有被定义为 prop 的 attribute 会自动添加到组件的根元素上 context.data
// 在普通组件中，被定义为 prop 的 attribute 会自动添加到组件的props上

const LHSelect = {
  name: 'lh-select',
  functional: true,
  props: {
    ...Select.props,
  },
  render(h, context) {
    // 在 vue 的源码中 props 和 data 的赋值逻辑是怎样的
    const { props, slots, data } = context;
    const slotsContents = slots();
    const slotChildren = getSlotChildren(h, slotsContents, ['clearIcon', 'suffixIcon']);
    // const children = slotsContents.default.concat(slotChildren);
    const children = [slotsContents.default, ...slotChildren];
    // console.log('children: ', children);
    return h(Select, {
      props: props,
      ...data
    }, children);
  }
}

LHSelect.install = function(Vue) {
  Vue.component('lh-select', LHSelect);
  Vue.component('lh-select-option', Select.Option);
  Vue.component('lh-select-option-group', Select.OptGroup);
}

LHSelect.Option = Select.Option;
LHSelect.OptGroup = Select.OptGroup;

export default LHSelect;