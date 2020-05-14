<template>
    <div class="order-pay">
       <order-header title="支付订单">
            <template v-slot:tip>
                <span>谨防钓鱼诈骗</span>
            </template>
       </order-header>
     
       <div class="containe">
           <div class="pay-top">
               <div class="top-lfet">
                   <div class="successImg">
                   </div>
                   <div class="word">
                       <p class="p1">订单提交成功！去付款咯～</p>
                       <p class="p2">请在<span>30分钟</span>  内完成支付, 超时后将取消订单</p>
                       <p class="p3">收货信息：{{addressInfo}}</p>
                   </div>
               </div>
               <div class="top-right">
                   <p class="moeny">应付总额：<span>{{payment}}</span> 元</p>
                   <p class="details" @click="showDeatils" :class="{'show':isShow}">订单详情</p>
               </div>
           </div>
           <div class="jiaohu" v-show="isShow">
               <div>
                   订单号：
                                <span>{{orderNo}}</span>
               </div>
               <div>
                   收货信息：<span>{{addressInfo}}</span>
               </div>
               <div v-for="(item,i) of orderDetail" :key="i" class="pname"> 
                   商品名称： 
                   <span><img v-lazy="item.productImage">{{item.productName}}</span>
               </div>
               <div>
                   发票信息：<span>电子发票 个人</span>
               </div>
           </div>
           <div class="pay-bottom">
               <p class="fangshi">选择以下方式付款</p>
               <p class="pingtai">支付平台</p>
               <div class="order">
                   <a href="javascript:;" class="zhifubao" :class="{'active':type==1}" @click="paySubmit(1)"></a>
                    <a href="javascript:;" class="wx" :class="{'active':type==2}" @click="paySubmit(2)"></a>
               </div>
           </div>
       </div>
       <!-- 微信支付 -->
       <div class="wei" v-show="isWxPay">
            <div class="mask"></div>
            <div class="wxImg">
                <div>
                    <img src="/imgs/pay/icon-scan.png">
                </div>
           <div class="qrcode">
               <div class="code-header">微信支付<span class="wxclose" @click="about"></span></div>
               <div class="code-body">  <img :src="payImg"></div>
                <div class="code-footer">
                    <p>请使用<span>微信</span> 扫一扫</p> 
                    <p>二维码完成支付</p>   
                </div>                
           </div>
        </div>
       </div>

    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'

import QRCode from 'qrcode'
import {mapState} from 'vuex'
export default {
    name:'order-pay',
    data(){
        return{
            t:'',//订单轮询定时器
            isWxPay:false,//是否显示微信支付
            payImg:'',//微信支付二维码
            type:0,//支付方式
            isShow:false,//是否展示订单详情,
            orderNo:this.$route.query.orderNo,//获得订单编号
            addressInfo:'',//收货人地址
            orderDetail:[],//订单详情
            payment:''//支付金额
        }
    },
    methods:{
        //轮询当前订单支付状态
        loopOrderState(){
            this.t=setInterval(() => {
                this.axios.get(`/orders/${this.orderNo}`).then(res=>{
                    if(res.status==20){ //0-已取消 10-未付款 20-已付款 40-已发货 50-交易成功 60-交易关闭
                        clearInterval(this.t);
                        this.$router.push("/order/list");
                    }
                })
            }, 1000);
        },
        //当关闭微信支付窗口是，询问是否已支付
        about(){
            this.isWxPay=false;
            clearInterval(this.t);
            this.messagebox.confirm('您确定是否完成支付?', '支付确认',{
                            confirmButtonText: '查看订单',
                            cancelButtonText: '未支付',
                            type: 'warning'
                            }).then((active) => {
                                if(active==="confirm"){
                                     this.$router.push("/order/list");
                                }
                            }).catch(() => {
                            this.message({
                                type: 'info',
                                message: '已取消支付'
                            });          
                            });
        },
        //支付
        paySubmit(type){
            if(type==1){
                window.open("/#/order/alipay?orderId="+this.orderNo,"_blank");
            }else{
              
                this.axios.post("/pay",{
                orderId:this.orderNo,
                orderName:'汤鹏的订单',
                amount:0.01,
                payType:2,
                }).then(res=>{
                    QRCode.toDataURL(res.content).then(url=>{
                        this.isWxPay=true;
                        this.payImg=url;
                        this.loopOrderState();
                    }).catch(err=>{
                        this.message.error("二维码生成失败，请稍后重试");
                    })
            })
            }
        },
        //获得订单详情
        getOrderDetails(){
            this.axios.get(`/orders/${this.orderNo}`).then(res=>{
                console.log(res);
                let item=res.shippingVo;
                this.addressInfo=`${item.receiverName},${item.receiverMobile},${item.receiverProvince},${item.receiverCity}${item.receiverDistrict},${item.receiverAddress}`
                this.orderDetail=res.orderItemVoList;
                this.payment=res.payment;
            });
            
        },
        //是否显示details
        showDeatils(){
            this.isShow=!this.isShow;
        },
    },
    components:{
            OrderHeader
        },
    computed:{
        ...mapState["uName"],
    },
    mounted(){
        this.getOrderDetails();
        console.log(this.orderNo)
    },
}
</script>
<style scoped>
    .order-pay .containe{
        width: 100%;
        background: #F5F5F5;
        padding-top:30px;
        padding-bottom: 30px;
    }
    .order-pay .containe .pay-top,.jiaohu,.pay-bottom{
        width: 1226px;
        background-color: #ffffff;
        margin: auto;
    }
    .order-pay .containe .pay-top{
        height: 230px;
        display: flex;
        justify-items: center;
        justify-content: space-between;
        padding: 60px;
        box-sizing: border-box;
    }
    .order-pay .containe .pay-top .top-lfet{
        display: flex;
        justify-items: center;
    }
    .order-pay .containe .pay-top .top-lfet .successImg{
            width: 90px;
            height: 90px;
            background:url(/imgs/icon-gou.png) #80c58a no-repeat 50%;
            border-radius: 50%;
            background-size: contain;
    }
    .order-pay .containe .pay-top .top-lfet .word {
        margin-left: 30px;
        text-align: left;
    }
    .order-pay .containe .pay-top .top-lfet .word .p1{
                width: 293px;
                color: #333333;
                font-size: 24px;
                font-weight: bold;     
    }
    .order-pay .containe .pay-top .top-lfet .word .p2,.p3{
        width: 508px;
        color: #666666;
        font-size: 14px;
        padding:5px 0;
    }
     .order-pay .containe .pay-top .top-lfet .word .p2>span{
         color: #FF6700;
     }
     .order-pay .containe  .pay-top .top-right{
         text-align: right;
     }
     .order-pay .containe  .pay-top .top-right .moeny{
            color: #666666;
            font-size: 14px;
            padding: 10px 0;
     }
      .order-pay .containe  .pay-top .top-right .moeny>span{
             color: #FF6700;
             font-size: 28px;
      }
       .order-pay .containe  .pay-top .top-right .details{
           color: #666666;
           font-size: 14px;
       }
        .order-pay .containe  .pay-top .top-right .details::after{
            content: '';
            display: inline-block;
            width: 14px;
            height: 14px;
            background: url('/imgs/icon-down.png') no-repeat center;
            background-size: contain;
            margin-left: 10px;
            cursor: pointer;
            vertical-align: middle;
        }
        .order-pay .containe  .pay-top .top-right .details.show::after{
                transform: rotate(180deg);  
        }
         .order-pay .containe .jiaohu{
             border: 1px solid #e5e5e5;
             padding:30px 0 30px 100px;
             text-align: left;
             box-sizing: border-box;
             font-size: 14px;
             color: #333;
         }
         .order-pay .containe .jiaohu .pname img{
             height: 30px;
             height: 30px;
             vertical-align: middle;
         }
          .order-pay .containe .jiaohu>div{
                padding: 10px 0;
          }
         .order-pay .containe .pay-bottom{
             padding-left: 60px;
             box-sizing: border-box;
             text-align: left;
             margin-top: 30px;
             color: #333333;
             padding-bottom: 30px
         }
         .order-pay .containe .pay-bottom .fangshi{
             font-size: 20px;
             padding: 20px 0;
             border-bottom:1px solid #e5e5e5;
         }
         .order-pay .containe .pay-bottom .pingtai{
             font-weight: bold;
             font-size: 18px;
             padding: 15px 0;
         }  
           .order-pay .containe .pay-bottom .order>a{
               display: inline-block;
               width: 190px;
               height: 66px;
               border:1px solid #e5e5e5;
               box-sizing: border-box;
           }
           .order-pay .containe .pay-bottom .order .zhifubao{
               background: url('/imgs/pay/icon-ali.png') no-repeat center;
               background-size: 130px;
           }
           .order-pay .containe .pay-bottom .order .zhifubao.active{
                border: 1px solid #FF6700;
           }
           .order-pay .containe .pay-bottom .order .wx{
               background: url('/imgs/pay/icon-wechat.png') no-repeat center;
               background-size: 130px;
               margin-left: 20px;
           }
            .order-pay .containe .pay-bottom .order .wx.active{
                border: 1px solid #FF6700;
            }
            /* 微信支付弹窗 */
            .order-pay .mask{
                width: 100%;
                height: 100%;
                background: #333;
                opacity: .5;
                position: fixed;
                top: 0;
            }
            .order-pay .wxImg{
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    display: flex;
            }
            .order-pay .wxImg img{
                height: 485px;
            }
            .order-pay .qrcode{
                width:370px;
                height: 440px;
                background: #ffffff;
                text-align: center;
            }
            .order-pay .qrcode .code-header{
                background: #e5e5e5;
                height: 60px;
                display: flex;
                line-height: 60px;
                justify-content: space-between;
                align-items: center;
                padding: 0px 10px;
                box-sizing: border-box;
                color: #333333;
                font-size: 20px;
                font-weight: bold;
            }
            .order-pay .qrcode .code-header .wxclose{
                width: 13px;
                height: 13px;
                display: inline-block;
                background: url('/imgs/icon-close.png') no-repeat center;
                background-size: contain;
                cursor: pointer;
            }
            .order-pay .qrcode .code-body{
                padding: 30px 0;
                box-sizing: border-box;
            }
            .order-pay .qrcode .code-body img{
                width: 237px;
                height: 240px;
            }
            .order-pay .code-footer p{
                padding: 3px 0;
            }
            .order-pay .code-footer span{
                color:#FF6204 ;
            }
</style>