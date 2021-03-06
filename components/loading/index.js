// components/loading/index.js
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
    },
    /**
     * loading大小
     */
    size: {
      type: Number,
      value: 240
    },
    /**
     * loading位置
     */
    position: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {}
});
