// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  console.log(wxContext.APPID);
  console.log(wxContext.ENV);
  console.log(wxContext.OPENID);

  var sum = event.a + event.b;

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    sum
  }
}