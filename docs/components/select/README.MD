### 下拉选择器

### 引入组件

```js
import { LHSelect } from "luohao-antd-vue";
```

### 概述

::: tip 改进点
LHSelect 和 Select 基本一致。
:::

### 基本用法

<!-- <select-demo></select-demo> -->

<template>
  <div class="select-demo">
  </div>
</template>

<script>

export default {
  name: 'SelectDemo',
  components: {
  },
  data() {
    return {
      religions: ["犹太教", "基督教", "婆罗门教", "佛教"]
    }
  }
}
</script>

```html
<template>
  <lh-select>
    <lh-select-option v-for="(music, index) in musics" :key="index">
      {{ music.name }}
    </lh-select-option>
  </lh-select>
</template>
<script>
  name: 'BasicDemo',
  data() {
    return {
      musics: [
        {
          name: '站台',
          author: '刘鸿'
        }
      ]
    }
  }
</script>
```
