<template>
    <div class="header">
        <!-- 购物车通栏 -->
        <div class="fa">
            <div  class="header-top">
                <div class="con">
                    <div class="header-left">
                        <a href="javascript:;">松果出行</a>
                        <a href="javascript:;">MIUI</a>
                        <a href="javascript:;">云服务</a>
                        <a href="javascript:;">协议规则</a>
                    </div>
                    <div class="header-right">
                        <a href="javascript:;">登录</a>
                        <a href="javascript:;">注册</a>
                        <a href="javascript:;"> <span class="ionc-cart"></span> 购物车</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 搜索通栏 -->
        <div class="header-bot">
            <div class="fa1">
                <div class="logo">
                    <a href="/#/index"></a>
                </div>
                <div class="menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <div class="pros">
                                <div class="pro" v-for="(p,i) of PhoneList" :key="i">
                                    <a target="_blank" :href="`#/product/${p.id}`">
                                        <div class="pro-img">
                                            <img :src="p.mainImage">
                                        </div>
                                        <div class="pro-name" v-text="p.name"></div>
                                        <div class="pro-pic">{{p.price.toFixed(2)}}元</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="serch">
                    <div class="ser">
                        <input type="text" name="keyword">
                        <a href="javascript:;" class="icon-search"></a>
                    </div>
                </div>
            </div>  
        </div>
       
    </div>
</template>
<script>
export default {
    name:"nav-header",
    data(){
        return{
            username:"",
            PhoneList:[],
        }
    },
    methods:{
         getProductList(){
            this.axios.get("/products",{
                params:{
                    categoryId:"100012",
                    pageSize:6
                }
            }).then( res=>{
                console.log(res.list);
                this.PhoneList=res.list;
            })
        }
    },
     mounted(){
         this.getProductList()
    },
}
</script>
<style scoped>
    /*购物车部门通栏*/
    .header .fa{
        background-color: #333333;
    }
    .header .con a{
        color:#B0B0B0;
        font-size: 12px;
        font-weight: bold;
    }
    .header .con{
        width: 1226px;
        height: 39px;
        margin: 0 auto;
        line-height: 39px;
        display: flex;
        justify-content: space-between;
    }
    .header .con .header-left a{
        margin-right: 17px;
    }
     .header .con .header-right{
         width: 200px;
     }
     .header .con .header-right a{
         margin-left: 13px;
     }
     .header .con .header-right a:last-child{
         display: inline-block;
         width: 110px;
         background-color:#FF7301;

     }
     .header .con .header-right .ionc-cart{
         display: inline-block;
         width: 16px;
         height: 12px;
         background: url('/imgs/icon-cart-checked.png') no-repeat center;
        background-size: contain;
        margin-left: 4px;
    }
    /* 搜索部门的通栏 */
    .header .header-bot a{
        color: #333333;
        font-size: 16px;
    }
    .header .header-bot .fa1{
         width: 1226px;
         height: 112px;
         margin: 0 auto;
         background-color: #FFFFFF;
         display: flex;
         justify-content: space-between; 
         align-items: center;   
         position: relative;  
    }
    .header .fa1 .logo{
         width:55px;
         height: 55px;
         background-color: #FF6600;
         float: left;
    }
    .header .logo a{
        display: inline-block;
        width:110px; 
        height: 55px;
    }
    .header .logo a::before{
        content: "";
        display: inline-block;
        width: 55px;
        height: 55px;
        background: url('/imgs/mi-logo.png') no-repeat center;
        background-size: 55px;
          transition:margin .2s;
    }
    .header .logo a::after{
        content: "";
        display: inline-block;
        width: 55px;
        height: 55px;
        background: url('/imgs/mi-home.png') no-repeat center;
        background-size: 55px;
    }
    .header .logo a:hover::before{
        margin-left:-110px;
       transition:margin .2s;
    }
     .header .fa1 .menu{
        margin-right: 188px;
     }
     .header .fa1 .menu .item-menu{
         display: inline-block;
         font-size: 16px;
         color: #333333;
         font-weight: bold;
         margin-left: 20px;
         cursor: pointer;
     }
     .header .fa1 .menu .item-menu:hover{
         color: #FF6600;
     }
     .header .fa1 .serch{
         width: 300px;
         height: 50px;
          border:1px solid #E0E0E0;

     }
     .header .fa1 .serch .ser{
          display: inline-block;
          width: 264px;
          height: 50px;
          display: flex;
        justify-content: center;
     }
     .header .fa1 .serch .ser input{
         width: 270px;
         height: 50px;
         border: none;
        border-right:1px solid #E0E0E0;
        padding-left: 14px;
        box-sizing: border-box;
     }
     .header .fa1 .serch a{
         display: inline-block;
         width: 18px;
         height: 18px;
         background: url("/imgs/icon-search.png") no-repeat center;
         background-size: contain;
         margin-left:28px;
         margin-top: 14px;
     }
      .header .fa1 .menu .item-menu .children a{
          display: inline-block;
      }
     .header .fa1 .menu .item-menu .children{
         width: 1226px;
         box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
         position: absolute;
         top: 112px;
         left: 0;
         border-top: 1px solid #E5E5E5;
         text-align: center;
         line-height: 12px;
         font-size: 12px;
         overflow: hidden;
         height: 0;
         transition: height 0.5s;
         z-index: 10;
     }
     .header .fa1 .menu .item-menu .children .pro{
         width: 201px;
         height: 220px;
         float: left;
         margin:26px 0 32px;
         position: relative;
     }
     .header .fa1 .menu .item-menu .children .pro .pro-img{
         height:112px;
     }
      .header .fa1 .menu .item-menu .children .pro .pro-img img{
            height: 111px;
      }
      .header .fa1 .menu .item-menu .children .pro .pro-name{
          margin-top: 16px;
          margin-bottom: 8px;
          font-weight: bold;
      }
       .header .fa1 .menu .item-menu .children .pro::after{
           content: "";
           position: absolute;
           top: 28px;
           right: 0;
           border: 1px solid #D7D7D7;
           height: 100px;
       }
       .header .fa1 .menu .item-menu .children .pro:last-child::after{
           display: none;
       }
      .header .fa1 .menu .item-menu .children .pro .pro-pic{
          color: #FF6600;
      }
      .header .fa1 .menu .item-menu:hover .children{
          height: 220px;
      }
</style>