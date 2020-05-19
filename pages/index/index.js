//index.js
//获取应用实例
import {request} from '../../request/index.js';
const app = getApp()

Page({
  data: {
    swiperList:[],//轮播图数据列表
    navList:[],//分类导航数据列表
    LunCengList:[],//楼层数据列表
  },
   // 获取轮播图图片列表
  getSwiperList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    }).then(res=>{
     this.setData({
       swiperList:res.data.message
     })
    });
  },
    //获取分类导航信息
  getNavList(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'}).then(res=>{
         this.setData({
           navList:res.data.message
         })
       })
  },
  //获取楼层信息
  getLunList(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'}).then(res=>{
      this.setData({
        LunCengList:res.data.message
      })
  })
  },
  onLoad: function (options) {
      this.getSwiperList();
      this.getNavList();
      this.getLunList();
  },
})
