//app.js
App({
  onLaunch: function() {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.systemInfo = e;
        this.globalData.statusBar = e.statusBarHeight;
        this.globalData.customBar =
          e.platform == "android"
            ? e.statusBarHeight + 50
            : e.statusBarHeight + 45;
      }
    });
  },
  globalData: {}
});
