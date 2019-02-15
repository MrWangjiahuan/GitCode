Component({
  options: {
    addGlobalClass: true
  },
  data: {
    selected: 0,
    list: [
      {
        pagePath: "/pages/trending/index",
        icon: "trending",
        size: 40,
        text: "趋势"
      },
      {
        pagePath: "/pages/hot/index",
        icon: "hot",
        size: 40,
        text: "最热"
      },
      {
        pagePath: "/pages/search/index",
        icon: "git-logo-search",
        size: 40,
        text: "搜索"
      },
      {
        pagePath: "/pages/activity/index",
        icon: "activity",
        size: 40,
        text: "动态"
      },
      {
        pagePath: "/pages/my/index",
        icon: "my",
        size: 40,
        text: "我的"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const url = e.currentTarget.dataset.path;
      const index = e.currentTarget.dataset.index;
      if (index == 2) {
        console.log(url);
        wx.navigateTo({
          url: url,
          fail: e => {
            console.log(e);
          }
        });
      } else {
        wx.switchTab({
          url
        });
      }
    }
  },
  pageLifetimes: {}
});
