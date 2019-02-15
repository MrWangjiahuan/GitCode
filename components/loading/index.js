// components/loading/index.js
//获取应用实例
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 根据索引选择loading
     */
    index: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight: app.globalData.systemInfo.windowHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {}
});
