<script>
import { Select, Input, Icon, Button } from 'ant-design-vue';
export default {
  name: 'lh-pagination',
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
    AInput: Input,
    AIcon: Icon,
    AButton: Button,
  },
  props: {},
  data () {
    return {

    }
  },
  render (h) {
    const children = getSlots();
    return h('div', {
      staticClass: 'lh-pagination',
      props: {}
    }, children);
  },
  methods: {
    getSlots() {
      return this.$scopeSlots;
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>