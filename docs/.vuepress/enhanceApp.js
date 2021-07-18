
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import LuohaoAntdVue from '@/index.js';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(Antd),
  Vue.use(LuohaoAntdVue);
};