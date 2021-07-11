<template>
  <div class="app">
    <date-range-picker v-model="value" class="range-container">
      <div class="prefix" slot="prefix" placement="bottomLeft">
        <a-dropdown :trigger="['click']">
          <a-menu slot="overlay" class="dropdown-menu-wrapper">
            <a-menu-item
              v-for="(item, index) in options"
              :key="index"
              :value="item.value"
            >
              {{ item.label }}
            </a-menu-item>
          </a-menu>
          <a-icon type="down" style="padding: 0 6px" />
        </a-dropdown>
      </div>
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from "./components/date-range-picker.vue";
import { Select, Dropdown, Menu } from "ant-design-vue";
import moment from "moment";
import mixins from "./mixins/index";
export default {
  name: "App",
  mixins: [mixins],
  components: {
    DateRangePicker,
    ASelect: Select,
    ASelectOption: Select.Option,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
  },
  data() {
    return {
      format: 'YYYY-MM',
      value: []
    }
  },
  methods: {
    onChange(dates) {
      console.log('start: ', moment(dates[0]).format(this.format), ' end: ',  moment(dates[1]).format(this.format));
    },
    onSelect(option) {
      const cases = [
        {
          match: (opt) => {
            return opt === 1; // 当天
          },
          action: () => {
            const min = moment().startOf("day");
            const max = moment().endOf("day");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 2; // 昨天
          },
          action: () => {
            const min = moment().subtract(1, "days").startOf("day");
            const max = moment().subtract(1, "days").endOf("day");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 3; // 本周
          },
          action: () => {
            const min = moment().startOf("week");
            const max = moment().endOf("week");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 4; // 上周
          },
          action: () => {
            const min = moment().subtract(1, "week").startOf("week");
            const max = moment().subtract(1, "week").endOf("week");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 5; // 本月
          },
          action: () => {
            const min = moment().startOf("month");
            const max = moment().endOf("month");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 6; // 上月
          },
          action: () => {
            const min = moment().subtract(1, "month").startOf("month");
            const max = moment().subtract(1, "month").endOf("month");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 7; // 本季度
          },
          action: () => {
            const min = moment().startOf("quarter");
            const max = moment().endOf("quarter");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 8; // 本年度
          },
          action: () => {
            const min = moment().startOf("year");
            const max = moment().endOf("year");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 9; // 过去7天内
          },
          action: () => {
            const min = moment().subtract(7, "days");
            const max = moment().subtract(1, "days");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 10; // 未来7天内
          },
          action: () => {
            const min = moment().add(1, "days");
            const max = moment().add(7, "days");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 11; // 未来30天内
          },
          action: () => {
            const min = moment().add(1, "days");
            const max = moment().add(30, "days");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
        {
          match: (opt) => {
            return opt === 12; // 过去30天内
          },
          action: () => {
            const min = moment().subtract(30, "days");
            const max = moment().subtract(1, "days");
            this.minvalue = min;
            this.maxvalue = max;
          },
        },
      ];
      for (const elem of cases) {
        if (elem.match(option)) {
          elem.action();
          break;
        }
      }
      this.$nextTick(() => {
        const min = moment(this.minvalue).format(this.format);
        const max = moment(this.maxvalue).format(this.format);
        this.$emit("refresh", [min, max]);
      });
    },
    onClear() {
      this.minvalue = null;
      this.maxvalue = null;
      this.$emit("refresh", [null, null]);
      this.selected = null;
    },
    openChange(status) {
      if (!status) {
        const min =
          (this.minvalue && moment(this.minvalue).format(this.format)) || null;
        const max =
          (this.maxvalue && moment(this.maxvalue).format(this.format)) || null;
        this.$emit("refresh", [min, max]);
        this.selected = null;
      }
    },
  },
  created() {},
};
</script>

<style scoped lang="less">
.range-container {
  margin: 0 auto;
  width: 400px;
  .prefix {
    cursor: pointer;
    border-right: 1px solid #d9d9d9;
  }
}
.dropdown-menu-wrapper {
  margin-top: 10px;
  overflow-y: auto;
  max-height: 300px;
}
</style>
