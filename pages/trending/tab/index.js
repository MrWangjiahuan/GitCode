// pages/trending/tab/index.js
import { TrendingModel } from "../../../models/trending.js";
const trendModel = new TrendingModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},
  // attached() {
  //   trendModel.getTrendList().then(res => {
  //     console.log(res);
  //   });
  // },
  /**
   * 组件的方法列表
   */
  methods: {
  },
  // pageLifetimes: {
  //   show() {
  //     trendModel.getTrendList().then(res => {
  //       console.log(res);
  //     });
  //   }
  // }
});
