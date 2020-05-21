// pages/category/category.js
import {request} from '../../request/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      leftMenuList:[],//左侧菜单数据
      rightContent:[],//右侧商品数据
      cates:[],//接口返回的所有数据
      currentTargetIndex:0,
      scrollTop:0,
  },
  getCates(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'}).then(res=>{
      this.setData({
        cates:res.data.message
      });
      //将数据缓存到storage中
      wx.setStorageSync('cates',{time:Date.now(),data:this.data.cates});
      let leftMenuList=this.data.cates.map((obj,index)=>{
       return  obj.cat_name
      })
      let rightContent=this.data.cates[this.data.currentTargetIndex].children;
      this.setData({
        leftMenuList,
        rightContent,
        scrollTop:0
      })
      
    })
  },
  handleItemTap(e){
    let {index} =e.currentTarget.dataset;
    this.setData({
      currentTargetIndex:index,
    });
    this.getCates();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const Cates=wx.getStorageSync('cates');
    if(!Cates){
       this.getCates();
    }else{
      //有旧数据，判断是否过期,定义过期时间5分钟
      if(Date.now()-Cates.time>60*5){
        this.getCates();
      }else{
        this.setData({
          cates:Cates.data,
        })
        let leftMenuList=this.data.cates.map((obj,index)=>{
          return  obj.cat_name
         })
         let rightContent=this.data.cates[this.data.currentTargetIndex].children;
          this.setData({
            leftMenuList,
            rightContent
          })
      }

    }
    
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