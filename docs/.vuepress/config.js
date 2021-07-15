const moment = require("moment");
const buildTimestamp = moment().toString();
const configureWebpack = require("./configs/webpack.config");

module.exports = {
  title: "组件库",
  description: "组件库",
  port: 9000,
  base: "/",
  themeConfig: {
    logo: "/logo.png",
    navbar: true,
    nav: [
      {
        text: "指南",
        link: "/guide/",
        target: "_self",
      },
      {
        text: "规范",
        link: "/standard/",
        target: "_self",
      },
      {
        text: "组件",
        link: "/components/select/",
        target: "_self",
      },
      {
        text: "仓库",
        link: "https://github.com/LuoHaoAt2017/luohao-element-design.git",
        target: "_blank",
      },
    ],
    sidebar: [
      {
        title: "指南",
        path: "/guide/",
        sidebarDepth: 1
      },
      {
        title: "规范",
        path: "/standard/",
        sidebarDepth: 1,
      },
      {
        title: "组件",
        path: "/components/select/",
        sidebarDepth: 1,
        children: [
          {
            title: "选择控件",
            path: "/components/select/",
            sidebarDepth: 2
          },
          {
            title: "日期控件",
            path: "/components/datepicker/",
            sidebarDepth: 2
          },
          {
            title: "组织机构",
            path: "/components/organization/",
            sidebarDepth: 2
          },
        ],
      }
    ],
    activeHeaderLinks: false,
    buildTimestamp,
    lastUpdated: "最后更新时间",
  },
  configureWebpack,
};
