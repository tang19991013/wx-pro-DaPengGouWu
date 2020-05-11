<template>
    <div class="cart">
        <order-header title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </order-header>
        <div class="con">
            <div class="container">
                <ul class="item-head">
                    <li>
                        <span class="checkbox" :class="{'checked':isAllchecked}" @click="checked"></span>全选
                    </li>
                    <li>商品名称</li>
                    <li>单价</li>
                    <li>数量</li>
                    <li>小计</li>
                    <li>操作</li>
                </ul>
                <ul class="item-list">
                    <li class="item" v-for="(p,i) of cartList" :key="i">
                        <div><span class="checkbox" :class="{'checked':p.productSelected}" @click="updataCart(p,'')"></span></div>
                        <img v-lazy="p.productMainImage">
                        <div class="proname">{{p.productName+','+p.productSubtitle}}</div>
                        <div class="propir">{{p.productPrice}}元</div>
                        <div class="btns">
                            <button class="jia" @click="updataCart(p,'-')">-</button><span>{{p.quantity}}</span><button class="jian" @click="updataCart(p,'+')">+</button>
                        </div>
                        <div class="xiaoji">
                            {{p.productTotalPrice}}元
                        </div>
                        <div class="close" @click="del(p)">
                           
                        </div>
                    </li>
                </ul>
            </div>
            <div class="rongqi">
                    <div class="jisuan">
                <div class="suan-left">
                        <a href="/#/index">继续购物</a>
                        <div>共<span>{{cartList.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件</div>
                </div>
                <div class="suan-right">
                        <span>合计：<span>{{carTotapriice}}</span>元 </span>
                        <a href="javascript:;" @click="order">去结算</a>
                </div>
            </div>
            </div>
            
        </div>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
import ServiceBar from './../components/ServiceBar'
import './../assets/css/base.css'
export default {
    name:"cart",
    data(){
        return{
            isAllchecked:null,//是否全部选中
            cartList:[],//保存购物车商品列表
            carTotapriice:0,//商品总金额
            checkedNum:0,//选中商品数量,
        }
    },
    methods:{
        //定义给data（）变量赋值函数
        rendDate(res){
             this.cartList=res.cartProductVoList || [];
                this.isAllchecked=res.selectedAll;
                this.carTotapriice=res.cartTotalPrice;
                this.checkedNum=this.cartList.filter(item=>item.productSelected).length;
        },
        ////购物车加号函数、减号函数,单个商品是否选中
        updataCart(count,type){
            let shulian=count.quantity;
            let selected=count.productSelected;
            if(type=='-'){
                if(shulian<=1){
                    shulian=1;
                }else{
                    --shulian;
                }
            }else if(type=='+'){
                if(shulian>=1){
                ++shulian;
                if(shulian==count.productStock){
                    alert("库存不足")
                    shulian=count.productStock;
                    return;
                    }
                }
            }else{
                selected=!count.productSelected;
            }
            this.axios.put(`/carts/${count.productId}`,{
                quantity:shulian,
                selected
            }).then(res=>{
                this.rendDate(res);
            })
        },
        //是否全选
         checked(){
             let url=this.isAllchecked?'carts/unSelectAll':'/carts/selectAll';
             this.axios.put(url).then(res=>{
                 this.rendDate(res);
             })
         },
        //删除购物车单个商品
        del(p){
            let id=p.productId;
            this.axios.delete(`/carts/${id}`).then(res=>{
                this.rendDate(res);
            })
        },
        //获取购物车商品的列表
        getCartpro(){
            this.axios.get("/carts").then(res=>{
                console.log(res);
                this.rendDate(res);
            })
        },
        //购物车结算函数
        order(){
            let ischecked=this.cartList.some(item=>item.productSelected);
            if(ischecked==false){
                alert("最少选择一项商品");
            }else{
                this.$router.push('/order/confirm');
            }
        }
    },
    components:{
        OrderHeader,NavFooter,ServiceBar
    },
    mounted(){
        this.getCartpro();
    }
}
</script>
<style scoped>
    .cart .con{
        background: #F5F5F5;
        padding-top: 30px;
        padding-bottom: 114px;
    }
     .cart .con .container{
         width: 1226px;
         margin: auto;
         background: #fff;
         padding: 0 30px;
         box-sizing: border-box;
     }
     .cart .con .container .item-head{
         display: flex;
         width: 100%;
         height: 79px;
         text-align: center;
         color: #666666;
         font-size: 14px;
         line-height: 79px;
     }
     .cart .con .container .item-head>li:first-child{
         width: 136px;  
         position: relative;
     }
      /* .cart .con .container .item-head>li:first-child .checkbox{
          width: 24px;
          height: 24px;
          border: 1px solid #e5e5e5;
          cursor: pointer;
          position: absolute;
          top: 31%;
          left: 15%;
     }
     .cart .con .container .item-head>li:first-child .checkbox.checked{
         background: url(/imgs/icon-gou.png) #f60 no-repeat 50%;
         background-size: contain;
     } */
     .cart .con .container .item-head>li:nth-child(2){
         width: 408px;
     }
     .cart .con .container .item-head>li:nth-child(3){
         width: 136px;
     }
    .cart .con .container .item-head>li:nth-child(4){
         width: 272px;
     }
      .cart .con .container .item-head>li:nth-child(5){
         width: 136px;
     }
     .cart .con .container .item-head>li:last-child{
         width: 136px;
     }
      .cart .con .container .item-list .item{
          width: 100%;
          height: 126px;
          position: relative;
          display: flex;
          align-items: center;
          border-top: 1px solid #e5e5e5;
          font-size: 16px;
      }
      .cart .con .container .item-list .item>div:first-child>sapn{
          position: absolute;
          left: 0;
      }
      .cart .con .container .item-list .item img{
          height: 80px;
          margin-left: 100px;
      }
      .cart .con .container .item-list .proname{
          height: 126px;
          color: #333333;
          font-size: 18px;
          margin-left: 40px;
          margin-top: 30px;
      }
        .cart .con .container .propir{
            color: #333;
            font-size: 18px;
            width: 90px;
            margin-left: 100px;
        }
         .cart .con .container .btns{
             height: 42px;
             line-height: 42px;
             margin-left:117px;
             display: flex;
         }
         .cart .con .container .btns .jia,.jian{
             width: 50px;
             height: 40px;
             color: #333;
             font-size: 14px;
            line-height: 40px;
            background: #ffffff;
            outline: 0;
            border: 1px solid #e5e5e5;
            cursor: pointer;
         }
         .cart .con .container .btns .jia{
             border-right: none;
         }
          .cart .con .container .btns .jian{
                border-left: none;
         }
          .cart .con .container .btns>span{
              height: 40px;
              padding:0 10px;
              border-top: 1px solid #e5e5e5;
              border-bottom: 1px solid #e5e5e5;
              box-sizing: border-box;
          }
           .cart .con .container .xiaoji{
               margin-left: 90px;
           }
           .cart .con .container .close{
               width: 14px;
               height: 14px;
               background: url('/imgs/icon-close.png') no-repeat center;
               background-size: contain;
               margin-left: 100px;
               cursor: pointer;
           }
           .cart .con .rongqi{
               width: 1226px;
               height: 50px;
               margin: auto;
           }
           .cart .con .rongqi .jisuan{
               display: flex;
               justify-content: space-between;
               justify-items: center;
               margin:30px 0;
           }
           .cart .con .rongqi .jisuan .suan-left,.suan-right{
               display: flex;
           }
           .cart .con .rongqi .jisuan .suan-left>a{
               color: #666666;
               font-size: 14px;
               margin-right: 50px;
           }
           .cart .con .rongqi .jisuan .suan-left>div{
               color: #666666;
               font-size: 14px;
           }
            .cart .con .rongqi .jisuan .suan-right>span{
                height: 50px;
                line-height: 50px;
                color: #FF6700;
                font-size: 14px;
                font-weight: bold;
                margin-right: 60px;
            }
             .cart .con .rongqi .jisuan .suan-right>a{
                 width: 202px;
                 height: 50px;
                 background: #FF6600;
                 color: #ffffff;
                 line-height: 50px;
                 text-align: center;
                 font-size: 18px;
                 font-weight: bold;
             }
</style>