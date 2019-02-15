Component({
  properties: {
    leftTitle: {
      type: String,
      value: ""
    },
    showRefresh: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    _refresh() {
      this.triggerEvent("refresh");
    }
  }
});
