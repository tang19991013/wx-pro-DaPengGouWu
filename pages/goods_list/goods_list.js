// pages/goods_list/goods_list.js
import {request} from '../../request/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      },
    ],//标题栏数据
    proList:[],//商品列表数据
  },
  //请求所用的参数
  QueryParams:{
    query:'',
    cid:'',
    pagenum:1,
    pagesize:10
  },
  //定义总页数变量
  totalPages:1,
  //获得商品列表函数
  getProList(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',data:this.QueryParams}).then(res=>{
      const total=res.data.message.total;
      this.totalPages=Math.ceil(total/this.QueryParams.pagesize)
      this.setData({
        proList:[...this.data.proList,...res.data.message.goods]
      })
      wx.stopPullDownRefresh();
    })
  },
  //修改tab标签函数
  changeTabs(e){
    let {index}=e.detail
    let tabs=this.data.tabs;
    tabs.forEach((item,i)=>i===index?item.isActive=true:item.isActive=false
    )
    this.setData({
      tabs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid=options.cld;
    console.log(this.QueryParams);
    this.getProList();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      //判断还有没有下一页数据
      if(this.QueryParams.pagenum>=this.totalPages){
          wx.showToast({
            title: '没有下一页数据',
            icon: ''
          })
      }else{
        this.QueryParams.pagenum++;
        this.getProList();
      }
  },
  //页面下拉刷新
  onPullDownRefresh(){
    this.setData({
      proList:[]
    })
    this.QueryParams.pagenum=1;
    this.getProList();
    wx.showToast({
      title:"刷新成功"
    })
  },
})