<template>
  <div class="date-range-picker">
    <slot name="prefix"></slot>
    <slot name="default">
      <a-popover
        trigger="click"
        placement="bottomLeft"
        overlayClassName="calendar-range-popover-container"
      >
        <template slot="content">
          <a-calendar :fullscreen="false" @panelChange="onPrevChange" />
          <a-calendar :fullscreen="false" @panelChange="onNextChange" />
        </template>
        <div class="default">
          <span class="min-value">{{ minlabel }}</span>
          <span class="separator">~</span>
          <span class="max-value">{{ maxlabel }}</span>
        </div>
      </a-popover>
    </slot>
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
import { Calendar, Icon, Popover } from "ant-design-vue";
import moment from "moment";
export default {
  name: "DateRangePicker",
  components: {
    ACalendar: Calendar,
    AIcon: Icon,
    APopover: Popover,
  },
  props: {},
  data() {
    return {
      value: [],
      showClear: false,
    };
  },
  computed: {
    minlabel() {
      return "开始时间";
    },
    maxlabel() {
      return "结束时间";
    },
  },
  methods: {
    onEnter() {
      this.showClear = this.value.length > 0;
    },
    onLeave() {
      this.showClear = false;
    },
    onClear() {},
    onPrevChange() {},
    onNextChange() {},
  },
};
</script>

<style scoped lang="less">
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
        display: flex;
      }
    }
  }
}
</style>