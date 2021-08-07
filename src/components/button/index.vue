
<script>
import { Button } from 'ant-design-vue';
export default {
  name: 'lh-button',
  functional: true,
  props: {

  },
  render(h, context) {
    const { slots } = context;
    const children = slots();
    return h(Button, {

    }, [children.default]);
  }
}
</script>
<style lang="less" scoped>
@import url('./style/index.less');
</style>