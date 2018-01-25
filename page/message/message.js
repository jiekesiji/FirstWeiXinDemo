var arr = [{
  title: "消息",
  desc: "实验实验一"
}, {
  title: "消息",
  desc: "实验实验一实验实验一"
}];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:arr
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
    setTimeout(function(){
      wx.stopPullDownRefresh();
    },300);

    this.data.arr.push({
      title: "消息1",
      desc: "实验一实验一实验一实验一实验er"
    })
    this.setData({
      arr: this.data.arr
    });
    
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
    
  }
})