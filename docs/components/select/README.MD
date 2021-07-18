### 下拉选择器

### 引入组件

```js
import { Select } from "luohao-antd-vue";
```

### 概述

::: tip 改进点
LHSelect 和 Select 基本一致。
:::

### 基本用法

<template>
  <div class="select-demo">
    <a-select style="width: 100%;" mode="tags" v-model="value">
      <a-select-option v-for="(item, index) in religions" :key="index" :value="item">
        {{ item }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import { Select } from 'ant-design-vue';
export default {
  name: 'SelectDemo',
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
  },
  data() {
    return {
      value: [],
      religions: ["犹太教", "基督教", "婆罗门教", "佛教"]
    }
  }
}
</script>
<style>
  .select-demo {
    margin-top: 10px;
  }
</style>

```html
<template>
  <div class="select-demo">
    <a-select style="width: 100%;">
      <a-select-option v-for="(item, index) in religions" :key="index">
        {{ item }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
import { Select } from 'ant-design-vue';
export default {
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
  },
  data() {
    return {
      religions: ["犹太教", "基督教", "婆罗门教", "佛教"]
    }
  }
}
</script>
```
