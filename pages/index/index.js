//index.js
//获取应用实例
const app = getApp()
const fetch = require('../../utils/fetch')
Page({
  data: {
    slides:[],
    categories:[],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    fetch('slides').then(res => {
      this.setData({
        slides: res.data
      })
    }),
    fetch('categories').then(res => {
      this.setData({
        categories: res.data
      })
    })
    // wx.request({
    //   url: 'https://locally.uieee.com/slides',
    //   success: res => {
    //     this.setData({
    //       slides: res.data
    //     })
    //   }
    // }),

    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   success: res => {
    //     this.setData({
    //       categories: res.data
    //     })
    //   }
    // })
  },
})
