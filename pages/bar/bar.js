//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    navList: [],
    swiperList: [],
    videoList: [],
    currentIndex: 0
  },
  onLoad: function () {
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
  },
  getNavList() {
    wx.request({
      url: app.globalData.reqApi + '/navList',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: result => {
        console.log(result);
        if (result.data.code === 0) {
          this.setData({
            navList: result.data.data.navList
          });
        }
      },
      fail: () => { },
      complete: () => { }
    });
  },
  getSwiperList() {
    wx.request({
      url: app.globalData.reqApi + '/swiperList',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: result => {
        console.log(result);
        if (result.data.code === 0) {
          this.setData({
            swiperList: result.data.data.swiperList
          });
        }
      },
      fail: () => { },
      complete: () => { }
    });
  },
  getVideoList() {
    wx.request({
      url: app.globalData.reqApi + '/videosList',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: result => {
        console.log(result);
        if (result.data.code === 0) {
          this.setData({
            videoList: result.data.data.videosList
          });
        }
      },
      fail: () => { },
      complete: () => { }
    });
  },
  activeNav(e) {
    this.setData({
      currentIndex: e.target.dataset.index
    });
    // console.log(e);
  },
  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
