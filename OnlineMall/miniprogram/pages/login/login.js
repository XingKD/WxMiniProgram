// miniprogram/pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    logoAni: {},
    btnAni: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let logoAni = wx.createAnimation({
      delay: 250,
      duration: 1000,
      timingFunction: 'ease',
    });
    logoAni.scale(1, 1).opacity(1).step();
    this.setData({logoAni: logoAni.export()});
    let btnAni = wx.createAnimation({
      delay: 250,
      duration: 1000,
      timingFunction: "ease"
    });
    btnAni.opacity(1).left(0).step();
    this.setData({btnAni: btnAni.export()});
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 点击事件
  onclick: function() {

  },
  onGetUserProfile: function(e) {
    // 用户信息授权
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: function(res) {
        let userProfile = res.userProfile;
        // 调用 login 云函数
        wx.cloud.callFunction({
          name: 'login',
          data: {
            userProfile: userProfile
          },
          success: function(res) {
            // 保存用户信息到全局变量
            getApp().globalData.userInfo = res.userInfo;
            // 保存用户简介到全局变量
            getApp().globalData.userProfile = res.userProfile;
            // 保存登录态
            wx.setStorageSync('isLogin', true);
            // 退回到主界面
            wx.navigateBack();
          }
        });
      }
    });
  },
  onGetPhoneNumber: function(e) {
    console.log(e)
  }
});
