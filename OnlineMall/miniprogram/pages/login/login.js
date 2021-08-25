// miniprogram/pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginAni: {},
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
    this.setData({loginAni: logoAni.export()});
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
        // 保存用户信息
        getApp().globalData.userInfo = res.userInfo;
        // 用户登录
        wx.login({
          timeout: 3000,
          success: function(res) {
            wx.navigateBack();
            console.log(getApp().globalData)
          }
        });
      }
    });
  },
  onGetPhoneNumber: function(e) {
    console.log(e)
  }
});
