//app.js
App({
  onLaunch: function () {
    var that = this;
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: "online-mall-4gmfvy8l4f956b12",
        traceUser: true,
      })
    }
    this.globalData = {
    }
    // 检查登录态
    wx.checkSession({
      fail: function(res) {
        // 跳转到登录界面
        wx.navigateTo({
          url: '/pages/login/login'
        });
      }
    });
  }
});
