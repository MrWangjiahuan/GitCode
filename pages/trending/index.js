//趋势版本库页面
import { TrendingModel } from "../../models/trending.js";
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
    statusBar: app.globalData.statusBar,
    customBar: app.globalData.customBar,
    windowHeight: app.globalData.systemInfo.windowHeight
  },
  attached(){
    console.log(trendModel.getTrendList());
  },
  /**
   * 组件的方法列表
   */
  methods: {},
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
