<template>
  <div class="app">
    <date-range-picker
      v-model="value"
      @change="onChange"
      :show="visible"
      class="range-container"
    >
      <div class="prefix" slot="prefix">
        <a-dropdown :trigger="['click']" placement="bottomLeft">
          <a-menu
            slot="overlay"
            class="dropdown-menu-wrapper"
            @click="onSelect"
          >
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
      <template v-if="label" slot="default">
        <div class="default" @click="openPicker">
          <span style="padding-left: 12px;">{{ label }}</span>
        </div>
      </template>
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from "./components/date-range/index.vue";
import { Select, Dropdown, Menu } from "ant-design-vue";
import moment from "moment";
import month from "./mixins/month";
export default {
  name: "App",
  mixins: [month],
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
      format: "YYYY-MM",
      visible: false,
      value: [],
      label: "",
    };
  },
  methods: {
    onChange() {
      this.label = "";
    },
    onSelect({ item }) {
      const option = item.value;
      const cases = [
        {
          match: (opt) => {
            return opt === 5; // 本月
          },
          action: () => {
            const min = moment().startOf("month");
            const max = moment().endOf("month");
            this.value = [min, max];
            this.label = "本月";
          },
        },
        {
          match: (opt) => {
            return opt === 6; // 上月
          },
          action: () => {
            const min = moment().subtract(1, "month").startOf("month");
            const max = moment().subtract(1, "month").endOf("month");
            this.value = [min, max];
            this.label = "上月";
          },
        },
        {
          match: (opt) => {
            return opt === 7; // 本季度
          },
          action: () => {
            const min = moment().startOf("quarter");
            const max = moment().endOf("quarter");
            this.value = [min, max];
            this.label = "本季度";
          },
        },
        {
          match: (opt) => {
            return opt === 8; // 本年度
          },
          action: () => {
            const min = moment().startOf("year");
            const max = moment().endOf("year");
            this.value = [min, max];
            this.label = "本年度";
          },
        },
      ];
      for (const elem of cases) {
        if (elem.match(option)) {
          elem.action();
          break;
        }
      }
      const minValue = this.value[0];
      const maxValue = this.value[1];
      const minLabel = minValue && moment(minValue).format(this.format);
      const maxLabel = minValue && moment(maxValue).format(this.format);
      this.$emit("refresh", [minLabel, maxLabel]);
    },
    onClear() {
      this.value = [];
      this.$emit("refresh", []);
    },
    openPicker() {
      this.visible = true;
    },
  },
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
