<script>
import { Popover } from 'ant-design-vue';
export default {
  name: 'lh-popover',
  functional: true,
  props: {
    ...Popover.props,
  },
  render(h, context) {
    const staticClass = '';
    const { data, slots, props } = context;
    const children = slots();
    return h(Popover, {
      staticClass: staticClass,
      props: props,
      ...data
    }, children);
  }
}
</script>
<style lang="less" scoped>
@import url('./style/index.less');
</style>