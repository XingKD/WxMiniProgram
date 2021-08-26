// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let wxContext = cloud.getWXContext()

  return {
    userInfo: {
      openid: wxContext.OPENID, 
      appid: wxContext.APPID,
      unionid: wxContext.UNIONID,
    },
    userProfile: event.userProfile
  }
}
