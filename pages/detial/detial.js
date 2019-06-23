// pages/detial/detial.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: {},
    othersList: [],
    commentData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },
  getCurrentVideo(videoId) {
    wx.request({
      url: app.globalData.reqApi + '/videoDetail?id=' + videoId,
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: result => {
        console.log(result);
        if (result.data.code === 0) {
          this.setData({
            videoInfo: result.data.data.videoInfo
          });
        }
      },
      fail: () => {},
      complete: () => {}
    });
  },
  // 获取推荐视频
  getOthersList(videoId) {
    const _this = this;
    wx.request({
      url:
        'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' +
        videoId,
      success(res) {
        if (res.data.code === 0) {
          console.log(res);
          _this.setData({
            othersList: res.data.data.othersList
          });
        }
      }
    });
  },
  getCommentList(videoId) {
    wx.request({
      url: app.globalData.reqApi + '/commentsList?id=' + videoId,
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: result => {
        console.log('pl' + result);
        if (result.data.code === 0) {
          this.setData({
            commentData: result.data.data.commentData
          });
        }
      },
      fail: () => {},
      complete: () => {}
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
