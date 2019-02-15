/**
 * TrendingRepoModel
 * 项目地址:
 * 博客地址:
 * @flow
 */

export default class TrendingRepoModel {
    constructor(fullName, url, description, language, languageColor, meta, contributors, contributorsUrl, starCount, forkCount) {
        this.fullName = fullName;
        this.url = url;
        this.description = description;
        this.language = language;
        this.languageColor = languageColor;
        this.meta = meta;
        this.contributors = contributors;
        this.contributorsUrl = contributorsUrl;
        this.starCount = starCount;
        this.forkCount = forkCount;
    }
}
