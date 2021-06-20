const moment = require('moment');
const buildTimestamp = moment().toString();

module.exports = {
  nav: [
    {
      text: '指南',
      link: '/guide/',
      target: '_self'
    },
    {
      text: '规范',
      link: '/standard/',
      target: '_self'
    },
    {
      text: '组件',
      link: '/components/select/',
      target: '_self'
    },
    {
      text: '仓库',
      link: 'https://github.com/LuoHaoAt2017/luohao-element-design.git',
      target: '_blank'
    },
  ],
  sidebar: {
    '/guide/': '指南',
    '/standard/': '规范',
    '/components': [
      {
        title: '下拉选择',
        path: '/components/select/',
      },
      {
        title: '输入搜索',
        path: '/components/search/',
      },
      {
        title: '组织机构',
        path: '/components/organization/',
      }
    ]
  },  
  buildTimestamp,
  lastUpdated: '最后更新时间',
}