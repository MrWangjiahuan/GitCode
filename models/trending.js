import { HTTP } from "../utils/http.js";

class TrendingModel extends HTTP {
  getTrendList(searchText,url) {
    return this.request({
      url: `${url}${searchText}`
    });
  }
}

export { TrendingModel };
