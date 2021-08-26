//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: "online-mall-4gmfvy8l4f956b12",
      traceUser: false,
    });
    this.globalData = {
      userInfo: {},
      userProfile: {}
    }
    // 获取登录态
    wx.getStorage({
      key: "isLogin",
      success: function(res) {
        // 如果未登录，则先跳转到登录界面
        if (res.data === false) {
          wx.navigateTo({
            url: '/pages/login/login'
          });
        }
      },
      fail: function(res) {
        // 未记录用户数据
        wx.navigateTo({
          url: '/pages/login/login'
        });
      }
    });
  }
});
