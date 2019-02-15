/**
 * 字符串工具类
 * @flow
 */
export default class StringUtil {
  /*
  * 去掉字符串左右空格、换行
  */
  static trim( text ){
    if (typeof(text) == "string")  {
      return text.replace(/^\s*|\s*$/g, "");
    }
    else{
      return text;
    }
  }
  /*
  * 判断字符串是否包含否个字符串，不区分大小写
  */
  static coverString(subStr,str){
    var reg = eval("/"+subStr+"/ig");
    return reg.test(str);
  }
}
