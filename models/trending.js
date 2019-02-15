import { HTTP } from "../utils/http.js";

class TrendingModel extends HTTP {
  getTrendList() {
    return this.request({
      url: "/trending/ballerina?since=daily"
    });
  }
}

export { TrendingModel };
