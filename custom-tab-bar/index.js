Component({
  options: {
    addGlobalClass: true
  },
  data: {
    selected: 0,
    list: [
      {
        pagePath: "/pages/trending/index",
        iconPath: "/images/tabbar/basics.png",
        selectedIconPath: "/images/tabbar/basics_cur.png",
        text: "趋势"
      },
      {
        pagePath: "/pages/hot/index",
        iconPath: "/images/tabbar/component.png",
        selectedIconPath: "/images/tabbar/component_cur.png",
        text: "最热"
      },
      {
        pagePath: "/pages/search/index",
        iconPath: "/images/tabbar/plugin.png",
        selectedIconPath: "/images/tabbar/plugin_cur.png",
        text: "搜索"
      },
      {
        pagePath: "/pages/activity/index",
        iconPath: "/images/tabbar/plugin.png",
        selectedIconPath: "/images/tabbar/plugin_cur.png",
        text: "动态"
      },
      {
        pagePath: "/pages/my/index",
        iconPath: "/images/tabbar/about.png",
        selectedIconPath: "/images/tabbar/about_cur.png",
        text: "我的"
      }
    ]
  },
  attached() {
    console.log("11111111")
  },
  methods: {
    switchTab(e) {
      console.log(e);
      const url = e.currentTarget.dataset.path;
      const index = e.currentTarget.dataset.index;
      if (index == 2) {
        wx.navigateTo({
          url: url
        });
      } else {
        wx.switchTab({
          url,
          success: e => {
            this.setData({
              selected: index
            });
          }
        });
      }
    }
  },
  pageLifetimes: {}
});
