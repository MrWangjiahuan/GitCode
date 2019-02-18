// pages/trending/tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showLoading:{
      type:Boolean,
      value:false
    }
  },
  attached(){
    console.log(this.properties.showLoading);
  },
  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {
  }
});
