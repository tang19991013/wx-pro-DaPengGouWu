<template>
    <div class="confirm">
        <order-header title="确定订单">
            <template v-slot:tip>
                <span>请填写收货地址</span>
            </template>
        </order-header>
        <div class="containe">
            <div class="content">
                <p class="biaoti1">收货地址</p>
                <div class="dizhi">
                    <div class="block">
                        <!-- v-for循环 -->
                        <div class="dizhi-content" v-for="(item,i) of list" :key="i" :class="{'check':i==index}" @click="check(i)">
                            <div class="add-dizhi">
                                <div class="block-name">{{item.receiverName}}</div>
                                <div class="block-phone">{{item.receiverMobile}}</div>
                                <div class="block-dizhi">
                                    <span>{{item.receiverProvince+' '+item.receiverCity+' '+item.receiverDistrict+' '+item.receiverAddress}}</span>
                                </div>
                                <div class="block-caozuo">
                                    <span class="delete" @click="del(item)"></span>
                                    <span class="updata" @click="showAlert(item)"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dizhi-content">
                        <div class="add-dizhi1">
                            <div class="add" @click="showAlert()"></div>
                            <div class="tianjia">添加新地址</div>
                        </div>
                    </div>
                </div>
                <p class="pro">商品</p>
                <div class="proinfo" v-for="(item,i) of cartList" :key="i">
                    <div class="info-left">
                        <img v-lazy="item.productMainImage">
                        <span>{{item.productName+","+item.productSubtitle}}</span>
                    </div>
                    <div class="info-right">
                        <span>{{item.productPrice}}元X{{item.quantity}}</span>
                        <span>{{item.productTotalPrice}}元</span>
                    </div>
                </div>
                <div class="peisong">
                    <p>配送方式</p><span>包邮</span>
                </div>
                <div class="fapiao">
                    <p>发票</p><span>电子</span><span>个人</span>
                </div>
                <div class="detail">
                    <div><span>商品总数：</span><span>{{count}}件</span></div>
                    <div><span>商品总价：</span><span>{{cartTotalPrice}}元</span></div>
                    <div><span>优惠活动：</span><span>0元</span></div>
                    <div><span>运费：</span><span>0元</span></div>
                    <div><span>应付总额:</span><span>{{cartTotalPrice}}元</span></div>
                </div>
                <div class="bt">
                    <a href="/#/cart" class="annui bt1">返回购物车</a>
                    <a href="javascript:;" class="annui bt2" @click="orderSubmit">去结算</a>
                </div>
            </div>
        </div>
        <!-- <order-alert title="修改收货地址" @hideAlert="hideAlert" v-show="isAlert" :id="id">
        </order-alert> -->
        <div class="alert" v-show="isAlert">
        <div class="mask"></div>
        <div class="alert-content">
            <div class="alert-header">
                    <div>
                        <span>{{title}}</span>
                        <span class="close" @click="close"></span>
                    </div>
            </div>
            <div class="alert-body">
                    <div class="l1">
                        <input type="text" placeholder="姓名" class="input" v-model="uname"><input type="text" placeholder="手机号" class="input" v-model="phone">
                    </div>
                    <div class="l2">
                        <select name="sheng" v-model="pi">
                            <option :value="i" v-for="(item,i) of prov" :key="i">{{item}}</option>
                        </select>
                        <select name="shi" v-model="ci">
                            <option :value="i" v-for="(item,i) of cities[pi]" :key="i">{{item}}</option>
                        </select>
                        <select name="xiang" v-model="xiangi">
                            <option :value="i" v-for="(item,i) of xiang[pi]" :key="i">{{item}}</option>
                        </select>
                    </div>
                    <div class="3l">
                        <input type="text" placeholder="请输入详细地址" class="input" v-model="xianxi">
                    </div>
                    <div class="4l">
                        <input type="text" placeholder="邮编" class="input" v-model="youbian">
                    </div>
            </div>
            <div class="alert-footer">
                         <a href="javascript:;" class="btn tijiao" v-if="bool" @click="upda">提交修改</a>
                         <div v-else>
                              <a href="javascript:;" @click="add" class="btn baocun">保存</a>
                              <a href="javascript:;" class="btn quxiao" @click="close">取消</a>
                         </div>
                        
            </div>
        </div>
            
    </div>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import {mapState} from 'vuex'
export default {
        name:"order-confirm",
        data(){
            return{
                index:0,//当前收货地址选择的索引
                title:"",//
                bool:false,//
                uname:'',//保存收件人
                phone:"",//保存手机号
                xianxi:"",//保存详细信息
                youbian:"",//保存邮编
                pi:0,//选中的省份
                ci:0,//选中的市区
                xiangi:0,//选中的乡镇下标
                prov:["河南","广州","北京"],//保存省份
                cities:[
                ["郑州","周口","南阳"],["汕头","佛山","惠州"],["海淀区","东城区","朝阳区"]
                ],//保存市或者区
                xiang:[
                ["裴营乡","高集","赵集"],
                ["汤集","滕楼","常营"],
                ["彭桥","夹到","岗营"]
                ],//保存乡镇
                isAlert:false,//控制点击添加地址弹出表单的显示和隐藏
                list:[],//收货地址列表
                cartList:[],//购物车中需要结算的商品列表
                cartTotalPrice:0,//购物车中已经选定的商品总金额
                count:0,//商品结算总件数
                checkedItem:{},//选中的收货地址的对象
                id:0,//当前选中的id
            }
        },
        computed:{
            ...mapState["uName"]
        },
        methods:{
            check(i){
                this.index=i;
            },
            //关闭alert
            close(){
                this.isAlert=false;
            },
            //显示alert
            showAlert(item){
                // if(arguments.length){}
               if(arguments[0]==undefined){
                   this.title="添加收货地址";
                    this.isAlert=true;
               }else{
                   console.log(item)
                   this.uname=item.receiverName;
                   this.phone=item.receiverMobile;
                   this.xianxi=item.receiverAddress;
                   this.youbian=item.receiverZip;
                   this.id=item.id;
                   this.prov[this.pi]=item.receiverProvince//省
                   this.cities[this.pi][this.ci]=item.receiverCity//市
                   this.xiang[this.ci][this.xiangi]=item.receiverDistrict//乡
                    this.title="修改收货地址";
                    this.bool=true;
                    this.isAlert=true;
               }
            },
            //修改收货地址信息
            upda(){
                this.axios.put(`/shippings/${this.id}`,{
                    receiverName:this.uname,
                    receiverMobile:this.phone,
                    receiverProvince:this.prov[this.pi],
                    receiverCity:this.cities[this.pi][this.ci],
                    receiverDistrict:this.xiang[this.ci][this.xiangi],
                    receiverAddress:this.xianxi,
                    receiverZip:this.youbian
                }).then(res=>{
                    this.close();
                    this.message.success("更新地址成功")
                    this.getAddressList();
                })
            },
            //添加收货地址信息
            add(){
                this.axios.post("shippings",{
                    receiverName:this.uname,
                    receiverMobile:this.phone,
                    receiverProvince:this.prov[this.pi],
                    receiverCity:this.cities[this.pi][this.ci],
                    receiverDistrict:this.xiang[this.ci][this.xiangi],
                    receiverAddress:this.xianxi,
                    receiverZip:this.youbian
                }).then(res=>{
                   this.close();
                    this.message.success("添加成功")
                    this.getAddressList();
                })
            },
            //删除收货地址
            del(item){
                let id=item.id;
                    this.messagebox('您确定要删除该收货地址吗?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                            }).then((active) => {
                                if(active==="confirm"){
                                     this.axios.delete(`/shippings/${id}`).then(()=>{
                                         this.message({
                                         type: 'success',
                                        message: '删除成功!'
                                        });
                                        this.getAddressList();
                                    })
                                }
                            }).catch(() => {
                            this.message({
                                type: 'info',
                                message: '已取消删除'
                            });          
                            });
            },
            getAddressList(){
                this.axios.get("/shippings").then(res=>{
                    this.list=res.list;
                })
            },
            //定义购物车中需要结算的商品列表
            getCartList(){
                this.axios.get("/carts").then(res=>{
                    let list=res.cartProductVoList;
                    this.cartTotalPrice=res.cartTotalPrice;
                    this.cartList=list.filter(item=>item.productSelected);
                    this.cartList.map(item=>{
                        this.count+=item.quantity
                    })
                })
            },
            //订单提交函数
            orderSubmit(){
                let item=this.list[this.index];
                console.log(item)
                if(!item){
                    this.message.error("请选择一个收货地址")
                    return;
                }
                this.axios.post("/orders",{
                    shippingId:item.id
                }).then(res=>{
                    this.$router.push({
                        path:"/order/pay",
                        query:{
                            orderNo:res.orderNo //订单号
                        }
                    })
                })
            }
        },
        components:{
            OrderHeader
        },
        mounted(){
            this.getAddressList();
            this.getCartList();
        },
}
</script>
<style scoped>
    .confirm .containe{
        height: auto;
        padding: 30px 0 50px;
        background: #F5F5F5;
    }
     .confirm .containe .content{
         width: 1226px;
         background: #FFFFFF;
         margin: auto;
         padding: 30px;
         box-sizing: border-box;
     }
     .confirm .containe .content .biaoti1{
         text-align: left;
         color: #333333;
         font-size: 20px;
         margin-bottom: 20px;
     }
       .confirm .containe .content .dizhi{
           display: flex;
           width: 100%;
           height: auto;
           /* justify-content: space-between; */
           flex-wrap: wrap;
       }
        
       .confirm .containe .content .dizhi .dizhi-content{
           width: 271px;
           height: 180px;
           border: 1px solid #E5E5E5;
           padding: 15px 24px;
           box-sizing: border-box;
           margin-right: 20px;
           margin-top: 10px;
       }
       .confirm .containe .content .dizhi .dizhi-content.check{
            border: 1px solid #FF6700;

       }
        .confirm .containe .content .dizhi .dizhi-content .add-dizhi{
           width: 69px;
           height: 50px;
           text-align: left;
       }
       .confirm .containe .content .dizhi .dizhi-content .add-dizhi1{
           width: 69px;
           height: 50px;
           margin: 50px auto;
       }
        .confirm .containe .content .dizhi  .block{
            display: flex;
            flex-wrap: wrap;
            cursor: pointer;
        }
       .confirm .containe .content .dizhi  .block  .add-dizhi .block-name{
           text-align: left;
           color: #333;
           height: 27px;
           font-size: 18px;
           margin-bottom: 10px;
           display: inline-block;
       }
       .confirm .containe .content .dizhi  .block  .add-dizhi .block-phone,.block-dizhi{
           font-size: 14px;
           color: #757575;
           width: 221px;
       }
       .confirm .containe .content .dizhi  .block  .add-dizhi .block-caozuo{
           width: 210px;
           display: flex;
           justify-content: space-between;
           margin-top: 30px;
       }
       .confirm .containe .content .dizhi  .block  .add-dizhi .block-caozuo .delete,.updata{
           width: 25px;
           height: 25px;
           background: url('/imgs/bi.png') no-repeat center;
           background-size:contain ;
           cursor: pointer;
       }
       .confirm .containe .content .dizhi  .block  .add-dizhi .block-caozuo .updata:hover{
            background-image: url('/imgs/bi-1.png');
       }
        .confirm .containe .content .dizhi  .block  .add-dizhi .block-caozuo .delete{
            background-image: url('/imgs/lajitong.png');
        }
         .confirm .containe .content .dizhi  .block  .add-dizhi .block-caozuo .delete:hover{
                background-image: url('/imgs/lajitong-1.png');
         }
       .confirm .containe .content .dizhi .dizhi-content .add-dizhi1 .add{
           width: 30px;
           height: 30px;
           background:url(/imgs/icon-add.png) #e0e0e0 no-repeat 50%;
           background-size: contain;
           border-radius: 50%;
           margin: auto;
           margin-bottom: 5px;  
           cursor: pointer;        
       }
       .confirm .containe .content .dizhi .dizhi-content .add-dizhi1 .add .tianjia{
           color: #999999;
           font-size: 14px;
       }
       /* 商品信息 */
        .confirm .containe .content .pro{
            text-align: left;
            color: #333;
            font-size: 18px;
            font-weight: bold;
            margin-top: 30px;
            margin-bottom: 10px;
        }
         .confirm .containe .content .proinfo{
             width: 100%;
             border-top: 1px solid #e5e5e5;
             padding: 10px 0;
             box-sizing: border-box;
             display: flex;
             justify-items: center;
             justify-content: space-between;
             font-size: 16px;
             color: #333;
             padding: 10px 0;
            box-sizing: border-box;
         }
         .confirm .containe .content .proinfo .info-left>img{
                height: 30px;
                vertical-align: middle;
         }
         .confirm .containe .content .proinfo .info-right>span:first-child{
             margin-right: 80px;
         }
         .confirm .containe .content .proinfo .info-right>span:last-child{
            color: #ff6700;
            margin-right: 10px;
         }
         /* 配送方式 */
         .confirm .containe .content .peisong{
             margin-top: 30px;
             border-top: 1px solid #E5E5E5;
             padding-top:20px ;
             box-sizing: border-box;
         }
         .confirm .containe .content .peisong,.fapiao{
             width: 100%;
             height: 23px;
             line-height: 23px;
             display: flex;
         }
         .confirm .containe .content .peisong>p{
             color: #333333;
             font-size: 20px;
             font-weight: bold;
             margin-right: 60px;
         }
         .confirm .containe .content .peisong>span{
             color: #FF6700;
             font-size: 16px;
             font-weight: bold;
         }
         /* 发票 */
         .confirm .containe .content .fapiao{
             margin:50px 0;
         }
         .confirm .containe .content .fapiao>p{
             color: #333333;
             font-size: 20px;
             font-weight: bold;
             margin-right: 100px;
         }
         .confirm .containe .content .fapiao>span{
             color: #FF6700;
             font-size: 16px;
             font-weight: bold;
         }
         /* 商品详细信息 */
          .confirm .containe .content .detail{
              padding: 50px 44px 33px 0;
              text-align: right;
              font-weight: bold;
              font-size: 16px;
              border-bottom: 1px solid #e5e5e5;
          }
          .confirm .containe .content .detail>div{
              height: 15px;
              margin-bottom: 20px;
              line-height: 15px;
          }
           .confirm .containe .content .detail>div>span+span{
               color: #ff6700;
               display: inline-block;
               width: 100px;
           }
             
           /* 最后的两个按钮 */
           .confirm .containe .content  .bt{
               text-align: right;
               margin-top: 12px;
           }
           .confirm .containe .content  .bt .annui{
               display: inline-block;
               width: 202px;
               height: 50px;
               text-align: center;
               line-height: 50px;
                font-weight: bold;
                font-size: 18px;
                 color: #fff;
           }
           .confirm .containe .content  .bt .bt1{
              margin-right: 30px;
               background: #b0b0b0;
           }
            .confirm .containe .content  .bt .bt2{
                background-color: #f60;

            }
              /* 添加新地址 */
             .alert{
                width: 100%;
                height: 100%;
            }
             .alert .mask{
                background: #000;
                 width: 100%;
                height: 100%;
                opacity: .5;
                position: fixed;
                top: 0;
                left: 0;
            }
             .alert .alert-content{
                 width: 660px;
                 height: 462px;
                 position: fixed;
                 top: 40%;
                 left: 50%;
                 background: #fff;
                 transform: translate(-50%,-50%);
             }
             .alert .alert-content .alert-header>div{
                  height: 60px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  background: #F5F5F5;
                  padding: 0 30px;
                  box-sizing: border-box;
              }
             .alert .alert-content .alert-header>div>span:first-child{
                   color: #333333;
                   font-size: 16px;
                   font-weight: bold;
               }
             .alert .alert-content .alert-header .close{
                  display: inline-block;
                  width: 16px;
                  height: 16px;
                  background: url('/imgs/icon-close.png') no-repeat center;
                  background-size: contain;
                  cursor: pointer;
              }
             .alert .alert-content .alert-header .close:hover{
                   transform: scale(1.5);
               }
             .alert .alert-content .alert-body{
               padding: 20px 30px;
               text-align: left;
            }
             .alert .alert-content .alert-body .input{
                width: 283px;
                height: 40px;
                border: 1px solid #E5E5E5;
                padding-left: 10px;
            }
             .alert .alert-content .alert-body .l1>input:last-child{
                 margin-left: 10px;
             }
             .alert .alert-content .alert-body .l2>select{
                    width: 50px;
                    height: 40px;
                    margin-right: 10px;
             }
             .alert .alert-content .alert-body>div{
                margin-bottom: 15px;
            }
             .alert .alert-content .alert-footer{
                display: flex;
                justify-content: center;
            }
            .alert .alert-content .alert-footer>div{
                display: flex;
                justify-content: center;
            }
             .alert .alert-content .alert-footer .btn{
                width: 160px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                color: #FFFFFF;
                font-weight: bold;
                font-size: 16px;
            }
            .alert .alert-content .alert-footer .btn.tijiao{
                    background: #FF6600;
            }
             .alert .alert-content .alert-footer .btn.baocun{
                background: #FF6600;
            }
              .alert .alert-content .alert-footer .btn.quxiao{
                background: #B0B0B0;
                margin-left: 10px;
            }
           
</style>