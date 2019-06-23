// pages/list/list.js
const fetch = require('../../utils/fetch')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:{},
    shops:[],
    pageIndex: 0,
    pageSize: 10,
    hasMore: true
  },
  loadMore () {
    if (!this.data.hasMore) return
    let { pageIndex, pageSize } = this.data
    const parames = {
      _page: ++pageIndex,
      _limit: pageSize
    }
    return fetch(`categories/${this.data.category.id}/shops`, parames ).then(res => {
      const totalCount = parseInt(res.header['X-Total-Count'])
      const hasMore = pageIndex * pageSize < totalCount
      const shops = this.data.shops.concat(res.data)
      this.setData({
        shops,
        pageIndex,
        hasMore
      })    
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`categories/${options.cat}`).then( res =>{
      // console.log(res.data)
      this.setData({
        category: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name,
      })
      //加载完分类信息再去加载商铺信息
      this.loadMore()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /**
   * 保证正确，再次设置title
   */
    if(this.data.category.name){
      wx.setNavigationBarTitle({
        title: this.data.category.name,
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    // console.log('到顶了')
    this.setData({
      shops:[],
      pageIndex: 0,
      hasMore: true
    })
    this.loadMore().then( () =>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //判断是否加载中...
    // console.log(!this.data.loadFlag)
    // console.log('到底了')
    // if (!this.data.loadFlag) {
    //   console.log('数据未加载完成，返回！')
    //   return
    //   }
    
    //加载下一页
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})