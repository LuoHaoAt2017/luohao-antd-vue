<template>
  <div class="about">
    <!-- <lh-pagination>
      <a-select slot="pageSize" v-model="pageSize">
        <a-select-option value="10">10条/页</a-select-option>
        <a-select-option value="20">20条/页</a-select-option>
        <a-select-option value="50">50条/页</a-select-option>
        <a-select-option value="100">100条/页</a-select-option>
      </a-select>
    </lh-pagination> -->
    <a-select id="pageSize" v-model="curSize" style="width: 100%">
      <a-select-option value="10">10条/页</a-select-option>
      <a-select-option value="20">20条/页</a-select-option>
      <a-select-option value="50">50条/页</a-select-option>
      <a-select-option value="100">100条/页</a-select-option>
    </a-select>
  </div>
</template>
<script>
import { Select } from "ant-design-vue";
export default {
  name: 'about',
  components: {
    ASelect: Select,
    ASelectOption: Select.Option
  },
  data () {
    return {
      curSize: 20,
      curPage: 1,
      totalSize: 100
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>

</style>