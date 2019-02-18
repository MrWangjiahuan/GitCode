//趋势版本库页面
import { TrendingModel } from "../../models/trending.js";
import { lan } from "../../public/language_colors";
const trendModel = new TrendingModel();
//获取应用实例
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    title:"All Languages",
    url:"https://github.com/trending",
    active: 0,
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    windowHeight: app.globalData.systemInfo.windowHeight,
    tabs: [
      {
        title: "每天",
        titleStyle: "color:#fff;",
        searchText: "/since=daily",
        data: [],
        showLoading: false
      },
      {
        title: "本周",
        titleStyle: "color:#fff;",
        searchText: "/since=weekly",
        data: [],
        showLoading: false
      },
      {
        title: "本月",
        titleStyle: "color:#fff;",
        searchText: "/since=monthly",
        data: [],
        showLoading: false
      }
    ]
  },
  attached() {
    const {tabs,url} = this.data
    trendModel.getTrendList(tabs[0].searchText,url).then(res => {
      console.log(res[0].fullName);
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _onChange(event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: "none"
      });
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === "function" && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        });
      }
    }
  }
});
