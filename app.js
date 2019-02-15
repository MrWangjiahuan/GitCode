//app.js
App({
  onLaunch: function() {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.systemInfo = e;
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar =
          e.platform == "android"
            ? e.statusBarHeight + 50
            : e.statusBarHeight + 45;
      }
    });
  },
  globalData: {}
});
