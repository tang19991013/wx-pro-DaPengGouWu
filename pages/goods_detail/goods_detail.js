import {request} from '../../request/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proId:0,
    proInfo:{},
  },
getProInfo(){
  request({url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',data:{
    goods_id:this.data.proId
  } 
}).then(res=>{
    this.setData({
      proInfo:res.data.message
    })
  })
},
//单击轮播图 放大预览
handlePrevewImage(e){
  let urls=this.data.proInfo.pics.map(v=>v.pics_mid);
  let current=e.currentTarget.dataset.url;
  wx.previewImage({
    current,
    urls
  });
},
//加入购物车
addCart(){
  //1获取缓存中购物车数数组
  let cart=wx.getStorageSync("cart")||[];
  //2判断商品对象手是存在于购物车数组中
  let index=cart.findIndex(v=>v.goods_id===this.data.proInfo.goods_id)
  if(index===-1){
    //不存在，表示第一次添加
    console.log("ss")
    this.data.proInfo.num=1;
    cart.push(this.data.proInfo);
  }else{
    //已经在购物车数据，执行num++
   cart[index].num++;
  }
  //把购物车重新添加到缓存中
  wx.setStorageSync('cart', cart)
  //弹窗提示
  wx.showToast({
    title: '加入成功',
    icon: 'success',
    mask:true
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      proId:options.pid
    })
    this.getProInfo();
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