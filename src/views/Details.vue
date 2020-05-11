<template>
    <div class="details">
        <div class="rongqi">
            <div class="h" :class="{isfixed:isFixed}">
                <div class="left">{{pro.name}}</div>
                <div class="right">
                    <a href="javascript:;">概述</a><span>|</span>
                    <a href="javascript:;">参数</a><span>|</span>
                    <a href="javascript:;">用户评价</a>
                </div>
            </div>
            <div class="body">
                <div class="body-left">
                     <swiper :options="swiperOption">
                        <swiper-slide  v-for="(g,i) of lunbo" :key="i">
                            <img :src="g">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="body-right">
                    <p class="pname">{{pro.name}}</p>
                    <p class="psub">{{pro.subtitle}}</p>
                    <div class="pstate">小米自营</div>
                    <p class="ppic">{{pro.price}}元</p>
                    <div class="dizhi">
                        <p class="p1">北京 北京市 朝阳区 安定门街道</p>
                        <p class="p2">有现货</p>
                    </div>
                    <h2>选择版本</h2>
                    <div class="guige">
                        <a href="javascript:;" class="btn active">6GB+64G 全网通</a>
                        <a href="javascript:;" class="btn">4GB+64G 移动4G</a>
                    </div>
                    <h2>选择颜色</h2>
                    <div class="color">
                        <a href="" class="btn active">深灰色</a>
                    </div>
                    <div class="totole">
                        <div class="info">
                            <div class="pro">Redmi K20 Pro 尊享版 6GB+64GB 全网通 深灰色{{pro.price}}元</div>
                            <div>2699元</div>
                        </div>
                        <div class="to">
                                <h1>总计：{{pro.price}}元</h1>
                        </div>
                    </div>
                    <div class="btns">
                        <a href="JavaScript:;" class="btn" @click="addCart">加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
                <div class="rongqi">
                    <p>价格说明</p>
                    <div><img src="/imgs/detail/item-price.jpeg"></div>
                </div>      
        </div>
         <!-- 服务条组件 -->
        <service-bar></service-bar>
    </div>
</template>
<script>
import './../assets/css/reset.css'
import ProductParams from './../components/ProductParams'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import ServiceBar from './../components/ServiceBar'
import {mapState,mapMutations} from 'vuex'
export default {
    name:"deta",
    data(){
        return{
            id:this.$route.params.id,//获取商品的id
            pro:{},//保存商品信息的对象
            isFixed:false,//是否fixed
            lunbo:[
                '/imgs/detail/phone-1.jpg',
                '/imgs/detail/phone-2.jpg',
                '/imgs/detail/phone-3.jpg',
                '/imgs/detail/phone-4.jpg',
            ],//商品的轮播图图片
            swiperOption:{  //轮播图的相关设置
                autoplay:true,//自动播放
                loop:true,//循环播放
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
        }
    },
    computed:{
        ...mapState(["proCount"]),
    },
    components:{
        Swiper,SwiperSlide,ServiceBar
    },
    methods:{
        ...mapMutations(["setCount"]),
        //获得商品单个详情
        getpro(){
            this.axios.get(`/products/${this.id}`).then(res=>{
                this.pro=res;
            })    
        },
         //加入购物车
         addCart(){
                this.axios.post("/carts",{
                    productId:this.id,
                    selected:true
                }).then(res=>{
                   
                    this.setCount(res.cartTotalQuantity);
                    this.$router.push("/cart");
                })
        },
        //实现吸顶操作
        Myscroll(){
            let top=window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed=top>152?true:false;
        }
    },
    mounted(){
        this.getpro();
        window.addEventListener("scroll",this.Myscroll,false);
    },
    destroyed(){
        window.removeEventListener("scroll",this.Myscroll,false)
    }
}
</script>
<style scoped>
    .details .rongqi{
        width: 1226px;
        margin: auto;
    }
    .details .rongqi .h{
        height: 70px;
         width: 1226px;
        margin: auto;
        line-height: 70px;
        display: flex;
        justify-content: space-between;
        background: #ffffff;
    }
    .details .rongqi .h .left{
        color: #333333;
        font-size: 18px;
        font-weight: bold;
    }
    .details .rongqi .h .right a{
        color: #666666;
        font-size: 14px;
    }
    .details .rongqi .h .right a+span{
        margin:0 10px;
    }
    .details .rongqi .isfixed{
        position: fixed;
        top: 0;
        right: -1px;
        width: 100%;
        background: #ffffff;
        box-shadow: 0 5px 5px #cccccc;;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 10;
    }
    .details .rongqi .body{
        height: 900px;
        display: flex;
    }
     .details .rongqi .body .body-left{
         width: 50%;
     }
     .details .rongqi .body .body-left img{
         width: 642px;
     }
     .details .rongqi .body .body-right{
         width: 50%;
         height: 870px;
         text-align: left;
         font-weight: bold;
         box-sizing: border-box;
         padding: 30px 0;
     }
      .details .rongqi .body .body-right .pname{
            font-size: 28px;
            color: #333333; 
      }
      .details .rongqi .body .body-right .psub{
          color:#333;
          font-size: 14px;
          margin: 10px 0;
      }
      .details .rongqi .body .body-right .pstate{
          color: #FF6700;
          font-size: 16px;
      }
      .details .rongqi .body .body-right .ppic{
           color: #FF6700;
           font-size: 20px;
           margin:10px 0;
      }
      .details .rongqi .body .body-right .dizhi{
          width: 100%;
          height: 108px;
          background: #E5E5E5;
          padding: 20px;
          box-sizing: border-box;
          color: #666666;
          font-size: 14px;
      }
      .details .rongqi .body .body-right .dizhi .p1{
          display: block;
          height: 26px;
          margin-bottom: 10px;
      }
       .details .rongqi .body .body-right .dizhi .p1::before{
           content: '';
           display: inline-block;
           width: 20px;
           height: 20px;
           background: url('/imgs/icon-loc.png') no-repeat left center;
           background-size:contain;
           vertical-align: middle;
           margin-right: 10px;
       }
       .details .rongqi .body .body-right .dizhi .p2,.color{
           box-sizing: border-box;
           padding-left: 30px;
           color: #ff6700;
           font-size: 14px;
       }
        .details .rongqi .body .body-right h2{
            padding: 20px 0;
        }
        .details .rongqi .body .body-right .btn{
            display: inline-block;
            width: 287px;
            height: 50px;
            border: 1px solid #e5e5e5;
            line-height: 50px;
            padding: 5px;
            text-align: center;
            color: #FF6600;
            font-size: 16px;
        }
        .details .rongqi .body .body-right .btn.active{
            border: 1px solid #FF6600;
        }
        .details .rongqi .body .body-right .guige>a:nth-child(2n){
            margin-left: 5px;
        }
        .details .rongqi .body .body-right .color>a::before{
            content: '';
            width: 14px;
            height: 14px;
            display: inline-block;
            background: #666;
            margin-right: 3px;
        }
        .details .rongqi .body .body-right  .totole{
            width: 100%;
            height: 108px;
            background: #FAFAFA;
            margin: 10px 0;
            padding: 20px;
            box-sizing: border-box;
        } 
         .details .rongqi .body .body-right  .totole .info{
             display: flex;
             justify-content: space-between;
             color: #333333;
             font-size: 14px;
         }
         .details .rongqi .body .body-right  .totole .to{
            margin-top: 10px;
         }
         .details .rongqi .body .body-right  .totole .to>h1{
             color: #FF6600;
         }
         .details .rongqi .body .body-right .btns>a{
             background: #FF6600;
             color: #ffffff;
         }
         /* 最后价格说明部分 */
         .details .footer{
             width: 100%;
             background: #f3f3f3;
         }
         .details .footer .rongqi{
             width: 1226px;
             height: 340px;
         }
         .details .footer .rongqi>p{
             color: #333333;
             font-size: 24px;
             font-weight: bold;
             padding: 38px 0 20px 0;
             text-align: left;
         }
         .details .footer .rongqi>div{
             height: 189px;
         }
</style>