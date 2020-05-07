<template>
    <div class="index">
       <div class="con">
           <!--轮播图和导航菜单实现 -->
           <div class="swiper-box">
               <div class="menu-ban">
                   <ul class="menu-caidan">
                       <li class="menu-item">
                           <a href="javascript:;">手机 电话卡</a>
                           <div class="children">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                       <li class="menu-item">
                           <a href="javascript:;">电视 盒子</a>
                            <div class="children" style="top:-75px;">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                       <li class="menu-item">
                           <a href="javascript:;">笔记本 平板</a>
                            <div class="children" style="top:-125px;">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                       <li class="menu-item">
                           <a href="javascript:;">家电 插线板</a>
                            <div class="children" style="top:-176px;">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                       <li class="menu-item">
                           <a href="javascript:;">出行 穿戴</a>
                            <div class="children" style="top:-226px;">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                       <li class="menu-item">
                           <a href="javascript:;">智能 路由器</a>
                            <div class="children" style="top:-276px;">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                       <li class="menu-item">
                           <a href="javascript:;">电源 配件</a>
                            <div class="children" style="top:-325px;">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                       <li class="menu-item">
                           <a href="javascript:;">生活 箱包</a>
                            <div class="children" style="top:-376px;">
                               <div v-for="(list,i) of menuList" :key="i" class="zi">
                                   <div v-for="(p,j) of list" :key="j">
                                       <a :href="`/#/product/${p.id==0?'':'p.id'}`">
                                            <img :src="p.img || '/imgs/item-box-1.png'" alt="">
                                            {{p.name?p.name:"小米CC9"}}
                                        </a>
                                   </div>      
                               </div>
                           </div>
                       </li>
                   </ul>
               </div>
               <swiper :options="swiperOption">
                   <swiper-slide  v-for="(g,i) of slideList" :key="i">
                       <a :href="`/#/product/${g.id}`">
                           <img :src="g.img">
                       </a>
                   </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
               </swiper>
           </div>
           <!-- 四张广告位图 -->
           <div class="ads">
               <div v-for="(img,i) of adsList" :key="i">
                   <a :href="`/#/product/${img.id}`">
                       <img v-lazy="img.img">
                   </a>
               </div>
           </div>
           <!-- 一张banner图 -->
           <div class="banner">
               <div>
                   <a :href="`/#/product/${bannerImg.id}`">
                       <img v-lazy="bannerImg.img" alt="">
                   </a>
               </div>
           </div>
           <!-- 手机商品列表实现 -->
           <div class="c">
                <div class="pro-list">
                    <!-- 标题 -->
                    <div class="biaoti">手机</div>
                    <div class="neirong">
                        <div class="leftban">
                            <a href="/#/product/23">
                                <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                            </a>
                        </div>
                        <div class="rightpro">
                            <div class="list" v-for="(item,i) of PhoneList" :key="i">
                                <div class="item" v-for="(p,j) of item" :key="j">
                                    <a :href="`/#/product/${p.id}`">
                                        <span :class="{newpro:j%2==0,miaosha:j%2!=0}">{{j%2==0?"新品":"秒杀"}}</span>
                                        <div class="pimg">
                                            <img v-lazy="p.mainImage">
                                        </div>
                                        <p class="subtitle">{{p.subtitle}}</p>
                                        <p class="name">{{p.name}}</p>
                                    </a>
                                    <p class="pri" @click="addCart(p.id)">{{p.price.toFixed(2)}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>  
       </div>
        <!-- 服务条组件 -->
        <service-bar></service-bar>
         <!-- 提示窗 -->
       <modal :showModal="showModal" @close="close"></modal>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name:"index",
    data(){
        return{
            showModal:false,
            swiperOption:{
                autoplay:true,//自动播放
                loop:true,//循环播放
                effect:"cube",
                cubeEffect: {
                    slideShadows: false,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            slideList:[
                {
                    id:'42',
                    img:"/imgs/slider/slide-1.jpg"
                },
                 {
                    id:'45',
                    img:"/imgs/slider/slide-2.jpg"
                },
                 {
                    id:'46',
                    img:"/imgs/slider/slide-3.jpg"
                },
                 {
                    id:'',
                    img:"/imgs/slider/slide-4.jpg"
                },
                 {
                    id:'',
                    img:"/imgs/slider/slide-5.jpg"
                },
            ],//保存轮播图片的数组
            menuList:[
                [
                    {
                    id:30,
                    img:"/imgs/item-box-1.png",
                    name:'小米CC9'
                    },
                     {
                    id:31,
                    img:"/imgs/item-box-2.png",
                    name:'小米8青春版'
                    },
                     {
                    id:32,
                    img:"/imgs/item-box-3.jpg",
                    name:'Redmi K20 Pro'
                    },
                     {
                    id:33,
                    img:"/imgs/item-box-4.jpg",
                    name:'移动4G专区'
                    }
                ],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ],//保存menu中的图片
            adsList:[
                {
                    id:"33",
                    img:"/imgs/ads/ads-1.png"
                },
                 {
                    id:"48",
                    img:"/imgs/ads/ads-2.jpg"
                },
                 {
                    id:"45",
                    img:"/imgs/ads/ads-3.png"
                },
                 {
                    id:"47",
                    img:"/imgs/ads/ads-4.jpg"
                }

            ],//保存广告位的4张图片
            bannerImg:{
                id:"30",
                img:"/imgs/banner-1.png"
            },
            PhoneList:[],//保存首页商品的二维数组。
        }
    },
    methods:{
        close(){
            this.showModal=false;
        },
        addCart(id){
            // this.axios.post("/carts",{
            //     productId:id,
            //     selected:true
            // }).then( res=>{
            //     console.log(res);
            // }).catch(err=>{
            //     console.log(err);
            // })
            this.showModal=true;
        },
        init(){
            this.axios.get("/products",{
                params:{
                    categoryId:100012,
                    pageSize:14
                }
            }).then(
                res=>{
                    res.list=res.list.slice(6,14);
                    this.PhoneList=[res.list.slice(0,4),res.list.slice(4,8)];
                    console.log(this.PhoneList)
                }
            )
        }
    },
    mounted(){
        this.init();
    },
    components:{
        ServiceBar,
        Swiper,
        SwiperSlide,
        Modal
    }
}
</script>
<style scoped>
    .index .swiper-box{
        position: relative;
        margin: auto;
    }
    .index .swiper-box .menu-ban{
        width: 264px;
        height: 451px;
        background: rgba(85,88,90,.48);
        position: absolute;
        left: 9.7%;
        top: 0;
        padding: 26px 0;
        box-sizing: border-box;
        z-index: 9;
    }
    .index .swiper-box .menu-ban .menu-item{
        height: 50px;
        line-height: 50px;
        position: relative;
    }
    .index .swiper-box .menu-ban .menu-item .children{
        width: 962px;
        height: 451px;
        background: #ffffff;
        position: absolute;
        left: 263px;
        top: -25px;
        border: 1px solid #E5E5E5;
        box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
        display: none;
    }
    .index .swiper-box .menu-ban .menu-item .children a{
        color: #333333;
        font-size: 14px;
        font-weight:bold;
    }
    .index .swiper-box .menu-ban .menu-item .children .zi{
        display: flex;
        justify-content: space-between;
    }
     .index .swiper-box .menu-ban .menu-item .children .zi>div{
         width: 24.8%;
         height: 75px;
         display: inline-block;
         line-height: 75px;
         text-align: left;
         margin-left: 10px;
         
     }
     .index .swiper-box .menu-ban .menu-item .children .zi>div img{
         height: 42px;
         vertical-align: middle;
         margin-left:5px;
     }
    .index .swiper-box .menu-ban .menu-item:hover{
        background-color: #f60;
    }
    .index .swiper-box .menu-ban .menu-item:hover .children{
        display: block;
    }
    .index .swiper-box .menu-ban .menu-item a{
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        margin-right: 60px;
    }
     .index .swiper-box .menu-ban .menu-item a::after{
         content: " ";
         width: 10px;
         height: 15px;
         background: url("/imgs/icon-arrow.png") no-repeat center;
         position: absolute;
         right: 35px;
         top: 16px;
         background-size:contain ;
     }
    .index .swiper-box .swiper-container{
         width: 1226px;
         height: 451px;
    }
    .index .swiper-box .swiper-container .swiper-button-prev{
        left: 274px;
    }
    .index .swiper-box .swiper-container img{
        width: 100%;
        height: 100%;
    }
    /* 广告位ads的实现 */
     .index .con .ads{
         width: 1226px;
         height: 167px;
         display: flex;
         margin: 20px auto;
        justify-content: space-between;                      
     }
     .index .con .ads img{
         height: 167px;
     }
     /* bannar部分 */
    .index .con .banner{
        width:1226px;
        height: 130px;
        overflow: hidden;
        margin: 10px auto;
    }
    .index .con .banner img{
        height: 130px;
    }
    /* 商品列表的实现 */
    .index .con .c{
        height: 740px;
        background: #F5F5F5;
         padding:30px 0;
         box-sizing: border-box;
    }
    .index .con .c .pro-list{
        width: 1226px;
        margin: 0 auto;
    }
     .index .con .c .pro-list .biaoti{
         color: #333333;
         font-size: 22px;
         font-weight: bold;
        text-align: left;
        margin-bottom:10px;
     }
      .index .con .c .pro-list .neirong{
          display: flex;
      }
      .index .con .c .pro-list .neirong .leftban{
          width: 224px;
          margin-right: 16px;
      }
      .index .con .c .pro-list .neirong .leftban img{
          height: 619px;
      }
      .index .con .c .pro-list .neirong .rightpro .list{
          display: flex;
          margin-bottom: 10px;
      }
      .index .con .c .pro-list .neirong .rightpro .list:last-child{
          margin-bottom: 0;
      }
      .index .con .c .pro-list .neirong .rightpro .list .item{
          width: 236px;
          height: 302px;
          margin-right: 14px;
          background: #ffffff;
           font-weight: bold;
           text-align: center;
      }
      .index .con .c .pro-list .neirong .rightpro .list .item:last-child{
          margin-right: 0;
      }
       .index .con .c .pro-list .neirong .rightpro .list .item span:first-child{
           width: 67px;
           height:24px;
           display: inline-block;
           font-size: 14px;
           color: #ffffff;
           line-height: 24px;
           text-align: center;
           margin: auto;
       }
      .index .con .c .pro-list .neirong .rightpro .list .item .newpro{
            background: #7ECF68;
      }
      .index .con .c .pro-list .neirong .rightpro .list .item .miaosha{
          background: #E82626;
      }
      .index .con .c .pro-list .neirong .rightpro .list .item .pimg img{
          height: 195px;
          width: 100%;

      }
      .index .con .c .pro-list .neirong .rightpro .list .item .subtitle{
          color: #333333;
          font-size: 14px;
      }
       .index .con .c .pro-list .neirong .rightpro .list .item .name{
           color: #999999;
           font-size: 12px;
       }
         .index .con .c .pro-list .neirong .rightpro .list .item .pri{
             color: #F20A0A;
             font-size: 14px;
             margin-top: 10px;
             cursor: pointer;
             
         }
         .index .con .c .pro-list .neirong .rightpro .list .item .pri::after{
             content: '';
             display: inline-block;
             width: 22px;
             height: 22px;
             background: url(/imgs/icon-cart-hover.png) no-repeat center;
             background-size: contain;
             vertical-align: middle;
             margin-left: 5px;  
         }
</style>