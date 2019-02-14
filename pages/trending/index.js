//趋势版本库页面

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
    statusBar: app.globalData.StatusBar,
    customBar: app.globalData.CustomBar
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
});
