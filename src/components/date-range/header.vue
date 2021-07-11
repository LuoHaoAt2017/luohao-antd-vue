<template>
  <div class="custom-header">
    <template v-if="option === 'prev'">
      <a-icon type="left" class="left" @click="onPrevClick" />
      <label>{{ value | formaMonth }}</label>
      <span></span>
    </template>
    <template v-else>
      <span></span>
      <label>{{ value | formaMonth }}</label>
      <a-icon type="right" class="right" @click="onNextClick" />
    </template>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CustomHeader",
  props: {
    value: {
      required: false,
    },
    option: {
      required: true,
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  filters: {
    formaMonth(value) {
      if (value) {
        return moment(value).format("YYYY-MM");
      } else {
        return value;
      }
    },
  },
  methods: {
    onPrevClick() {
      if (this.value) {
        this.onChange(moment(this.value).subtract(1, "years"));
      }
    },
    onNextClick() {
      if (this.value) {
        this.onChange(moment(this.value).add(1, "years"));
      }
    },
  },
};
</script>

<style scoped lang="less">
.custom-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 12px 16px;
  .left,
  .right {
    cursor: pointer;
  }
}
</style>