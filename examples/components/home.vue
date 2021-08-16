<template>
  <div class="home">
    <lh-select ref="select" v-model="value" placeholder	="请选择诗句" :allowClear="true"	label="select"  class="select-wrapper">
      <template slot="title">黄鹤楼送孟浩然之广陵</template>
      <template slot="suffixIcon"><a-icon type="down-square" /></template>
      <template slot="clearIcon"><a-icon type="delete" /></template>
      <lh-select-option value="1" key="1">故人西辞黄鹤楼</lh-select-option>
      <lh-select-option value="2" key="2">烟花三月下扬州</lh-select-option>
      <lh-select-option value="3" key="3">孤帆远影碧空尽</lh-select-option>
      <lh-select-option value="4" key="4">惟见长江天际流</lh-select-option>
    </lh-select>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue';
export default {
  name: 'home',
  components: {
    AIcon: Icon
  },
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    console.log('select', this.$refs.select);
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.home {
  padding: 20px;
}
.select-wrapper {
  width: 100%;
}
</style>