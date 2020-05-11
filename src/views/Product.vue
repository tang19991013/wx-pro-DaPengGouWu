<template>
    <div class="product">
        <product-params :name="product.name" :id="product.id"></product-params>
                <div class="p1">
                    <div class="rongqi">
                        <h1>{{product.name}}</h1>
                        <p class="params">
                            <a href="javascript:;">全球首款双频 GP</a><span>|</span>
                            <a href="javascript:;">骁龙845</a><span>|</span>
                            <a href="javascript:;">AI 变焦双摄</a><span>|</span>
                            <a href="javascript:;">红外人脸识别</a>
                        </p>
                        <p class="pic">¥{{product.price.toFixed(2)}}</p>
                    </div>  
                </div>
                <div class="p2">
                     <div class="rongqi"></div>
                </div>
                <div class="p3">
                    <div class="rongqi"></div>
                </div>
                <div class="lunbo">
                     <swiper :options="swiperOption">
                            <swiper-slide  v-for="(g,i) of lunboList" :key="i">
                                    <img v-lazy="g">
                            </swiper-slide>
                    </swiper>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <p>{{product.subtitle}}</p>
                </div>
                <div class="video">
                     <div class="rongqi">
                         <p>60帧超慢动作摄影慢慢回味每一瞬间的精彩</p>
                        <p class="last">后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！更能AI 精准分析视频内容，15个场景智能匹配</p>
                        <div class="videoImg" @click="bofang"></div>
                        <div>
                            <div class="videobox">
                                <div class="videomsk" v-show="isPlay==true"></div>
                                <div class="close" @click="close" v-show="isPlay==true"></div>
                                <video src="/imgs/product/video.mp4" controls autoplay v-show="isPlay==true" muted></video>
                            </div>
                        </div>
                     </div>
                </div>
    
    
    
                 <!-- 服务条组件 -->
        <service-bar></service-bar>
    </div>
    
</template>
<script>
import ProductParams from './../components/ProductParams'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ServiceBar from './../components/ServiceBar'
export default {
    name:"product",
    data(){
        return{
            lunboList:[
                '/imgs/product/gallery-2.png',
                '/imgs/product/gallery-3.png',
                '/imgs/product/gallery-4.png',
                '/imgs/product/gallery-5.jpg',
                '/imgs/product/gallery-6.jpg',
            ],//保存轮播图片的数组
            swiperOption:{
                autoplay:true,
                slidesPerView:3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
            isPlay:false,//是否播放,
            product:{
                price:0
            },//定义商品的信息
        }
    },
    
    components:{
        ProductParams,
        Swiper,
        SwiperSlide,
        ServiceBar
    },
    methods:{
        //获取商品信息
        getProInfo(){
            let id=this.$route.params.id;//获取地址栏最后的id值
            this.axios.get(`/products/${id}`).then(res=>{
                this.product=res;
                console.log(res);
            })
        },
        //播放视频的函数
        bofang(){
            this.isPlay=true;
        },
        //关闭视频
        close(){
            this.isPlay=false;
        }
    },
    mounted(){
        this.getProInfo();
    },
}
</script>
<style scoped>
    .product .p1{
        width: 100%;
        height:582px;
        background: url('/imgs/product/product-bg-1.png') no-repeat center;
        background-size: contain;

    }
    .product .p1 .rongqi{
        width: 1226px;
        margin: auto;
        padding: 40px 0;
        box-sizing: border-box;
        text-align: center;
        color: #333333;
    }
     .product .p1 .rongqi h1{
         font-size: 80px;
          font-weight: bold;
     }
      .product .p1 .rongqi .params>a{
          font-size: 16px;
          color: #333333;
      }
      .product .p1 .rongqi .params>span{
          margin: 0 10px;
      }
       .product .p1 .rongqi .pic{
           font-size: 38px;
           margin-top: 10px;
          
       }
     .product .p2 .rongqi{
         width: 1226px;
         height: 480px;
         margin: auto;
         background: url('/imgs/product/product-bg-2.png') no-repeat center;
         background-size: contain;
     }
     .product .p3{
        width: 100%;
        height:582px;
        background: url('/imgs/product/product-bg-3.png') no-repeat center;
        background-size: contain;
     }
      .product .lunbo{
          width:100%;
      }
      .product .lunbo img{
          width:100%;
      }
      .product .lunbo p{
          color: #333333;
          font-size: 18px;
          padding-top: 20px;
      }
      .product .lunbo .swiper-pagination{
          left: 50%;
      }
      .product .video .rongqi{
          background: #070708;
          margin-top: 20px;
          padding: 82px 0;
          box-sizing: border-box;
          text-align: center;
          color: #FFFFFF;
          margin-bottom: 50px;
      }
      .product .video .rongqi p:first-child{
          font-size: 60px;
      }
        .product .video .rongqi .last{
            font-size: 24px;
            margin-top:50px;
        }
        .product .video .rongqi .videoImg{
            width: 1226px;
            height: 500px;
            background: url('/imgs/product/gallery-1.png') no-repeat center;
            margin: 0 auto;
            margin-top: 100px;
            cursor: pointer;
        }
        /* 视频播放 */
        .product .video .rongqi  .videomsk{
            width: 100%;
            height: 100%;
            position: fixed;
            background: #000000;
            opacity:.5;
            top:0;
            z-index: 20;
        }
        .product .video .rongqi{
            position: relative;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
         .product .video .rongqi .videobox video{
             position: fixed;
             width: 1000px;
             height: 536px;
             left: 50%;
             top: 50%;
             transform: translate(-50%,-50%);
             z-index: 21;
             outline: none;  
             object-fit: cover;
         }
         .product .video .rongqi .videobox .close{
             position: fixed;
             background: url('/imgs/icon-close.png') no-repeat center;
             width: 15px;
             height: 15px;
             background-size:contain ;
             left: 81%;
             top: 10%;
             z-index: 22;
             cursor: pointer;  
             color: #666666;
         }
</style>