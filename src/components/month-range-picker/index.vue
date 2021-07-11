<template>
  <div class="date-range-picker">
    <slot name="prefix"></slot>
    <a-popover
      ref="popover"
      v-model="visible"
      trigger="click"
      placement="bottomLeft"
      @visibleChange="visibleChange"
      overlayClassName="calendar-range-popover-container"
    >
      <template slot="content">
        <div class="calendar-wrapper" :style="style">
          <a-calendar
            v-model="minValue"
            class="calendar"
            mode="year"
            :fullscreen="false"
            :disabledDate="disabledPrevDate"
            :headerRender="(param) => headerRender(param, 'prev')"
          >
          </a-calendar>
          <a-calendar
            v-model="maxValue"
            class="calendar"
            mode="year"
            :fullscreen="false"
            :disabledDate="disabledNextDate"
            :headerRender="(param) => headerRender(param, 'next')"
          />
        </div>
        <a-divider type="horizontal" style="margin: 6px 0" />
        <div class="custom-footer">
          <a-button type="default" size="small" @click="onCancle"
            >取消</a-button
          >
          <a-button type="primary" size="small" @click="onConfirm"
            >确定</a-button
          >
        </div>
      </template>
      <slot name="default">
        <div class="default">
          <span class="min-value">{{ minlabel }}</span>
          <span class="separator">~</span>
          <span class="max-value">{{ maxlabel }}</span>
        </div>
      </slot>
    </a-popover>
    <slot name="suffix">
      <div class="suffix">
        <a-icon type="calendar" v-if="!showClear" @mouseenter="onEnter" />
        <a-icon
          type="close-circle"
          v-else
          @mouseleave="onLeave"
          @click.stop="onClear"
        />
      </div>
    </slot>
  </div>
</template>

<script>
import { Calendar, Icon, Popover, Button, Divider } from "ant-design-vue";
import "moment/locale/zh-cn";
import moment from "moment";
import CustomHeader from "./header.vue";
export default {
  name: "DateRangePicker",
  components: {
    ACalendar: Calendar,
    AIcon: Icon,
    APopover: Popover,
    AButton: Button,
    ADivider: Divider,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    width: {
      required: false,
      default: 560,
    },
    value: {
      required: false,
      default: () => [],
    },
    show: {
      required: false,
      default: false,
    },
  },
  data() {
    return {
      minValue: null,
      maxValue: null,
      showClear: false,
      style: {},
      visible: false,
    };
  },
  computed: {
    minlabel() {
      if (this.value[0]) {
        return moment(this.value[0]).format("YYYY-MM");
      } else {
        return "开始时间";
      }
    },
    maxlabel() {
      if (this.value[1]) {
        return moment(this.value[1]).format("YYYY-MM");
      } else {
        return "结束时间";
      }
    },
  },
  watch: {
    show(value) {
      this.visible = value;
    },
  },
  methods: {
    onEnter() {
      if (this.minValue) {
        this.showClear = true;
      }
    },
    onLeave() {
      this.showClear = false;
    },
    onClear() {
      this.minValue = moment();
      this.maxValue = moment();
      this.$emit("change", []);
    },
    onCancle() {
      this.visible = false;
      this.$emit("close");
    },
    onConfirm() {
      this.visible = false;
      if (
        !moment(this.minValue).isSame(this.value[0]) ||
        !moment(this.maxValue).isSame(this.value[1])
      ) {
        this.$emit("change", [this.minValue, this.maxValue]);
      }
    },
    visibleChange(visible) {
      if (!visible) {
        if (
          !moment(this.minValue).isSame(this.value[0]) ||
          !moment(this.maxValue).isSame(this.value[1])
        ) {
          this.$emit("change", [this.minValue, this.maxValue]);
        }
      } else {
        this.minValue = this.value[0] || moment();
        this.maxValue = this.value[1] || moment();
      }
    },
    disabledPrevDate(date) {
      if (this.maxValue) {
        return moment(date).isAfter(this.maxValue);
      }
      return false;
    },
    disabledNextDate(date) {
      if (this.minValue) {
        return moment(date).isBefore(this.minValue);
      }
      return false;
    },
    headerRender({ value, type, onChange, onTypeChange }, option) {
      return this.$createElement(
        CustomHeader,
        {
          props: {
            value: value,
            type: type,
            onChange: onChange,
            onTypeChange: onTypeChange,
            option: option,
          },
        },
        ["hello", "world"]
      );
    },
  },
  created() {
    this.style.width = this.width + "px";
  },
};
</script>

<style lang="less">
.date-range-picker {
  display: flex;
  align-items: center;
  height: 32px;
  line-height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  .default {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    .min-value {
      padding-left: 12px;
    }
    .min-value,
    .max-value {
      flex-grow: 1;
      flex-shrink: 1;
    }
    .separator {
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0 10px;
    }
  }
  .suffix {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .suffix {
    padding: 0 12px;
  }
  .clear {
    cursor: pointer;
  }
}
</style>

<style lang="less">
.date-range-picker {
  .ant-select-selection {
    border: none;
    .ant-select-arrow {
      right: 6px;
    }
    .ant-select-selection__rendered {
      display: none;
    }
  }
  .ant-select-arrow {
    left: 4px;
  }
  .ant-select-selection__rendered {
    .ant-select-selection-selected-value {
      display: none !important;
    }
  }
}
.calendar-range-popover-container {
  padding-top: 0px;
  .ant-popover-content {
    .ant-popover-arrow {
      display: none;
    }
    .ant-popover-inner {
      .ant-popover-inner-content {
        padding: 0px 0px;
        .calendar-wrapper {
          display: flex;
          .calendar {
            min-width: 280px;
            .ant-fullcalendar-header {
              text-align: center;
            }
            .ant-fullcalendar-month-panel-cell-disabled {
              .ant-fullcalendar-month {
                .ant-fullcalendar-value {
                  color: rgba(0, 0, 0, 0.25);
                  background: #f5f5f5;
                  cursor: not-allowed;
                }
              }
            }
          }
        }
        .custom-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-bottom: 6px;
          padding-right: 12px;
          button:first-child {
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>