export default {
  data() {
    return {
      locale: {
        lang: {
          rangePlaceholder: ["开始日期", "结束日期"],
          today: "今天",
          now: "此刻",
          backToToday: "返回今天",
          ok: "确定",
          timeSelect: "选择时间",
          dateSelect: "选择日期",
          weekSelect: "选择周",
          clear: "清除",
          month: "月",
          year: "年",
          previousMonth: "上个月 (翻页上键)",
          nextMonth: "下个月 (翻页下键)",
          monthSelect: "选择月份",
          yearSelect: "选择年份",
          decadeSelect: "选择年代",
          yearFormat: "YYYY年",
          dayFormat: "D日",
          dateFormat: "YYYY年M月D日",
          dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
          previousYear: "上一年 (Control键加左方向键)",
          nextYear: "下一年 (Control键加右方向键)",
          previousDecade: "上一年代",
          nextDecade: "下一年代",
          previousCentury: "上一世纪",
          nextCentury: "下一世纪",
        },
      },
      options: [
        {
          label: "当天",
          value: 1,
        },
        {
          label: "昨天",
          value: 2,
        },
        {
          label: "本周",
          value: 3,
        },
        {
          label: "上周",
          value: 4,
        },
        {
          label: "本月",
          value: 5,
        },
        {
          label: "上月",
          value: 6,
        },
        {
          label: "本季度",
          value: 7,
        },
        {
          label: "本年度",
          value: 8,
        },
        {
          label: "过去7天内",
          value: 9,
        },
        {
          label: "未来7天内",
          value: 10,
        },
        {
          label: "未来30天内",
          value: 11,
        },
        {
          label: "过去30天内",
          value: 12,
        },
      ]
    }
  }
}