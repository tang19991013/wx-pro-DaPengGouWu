<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
            </template>
        </order-header>
        <div class="containe">
        <!--loading -->
         <loading v-show="isLoading"></loading>
            <ul class="list">
                <li class="item" v-for="(order,i) of OrderList" :key="i">
                    <div class="item-info">
                        <div class="info">
                            <p>
                                <span>{{order.createTime}}</span>
                                <span>{{order.receiverName}}</span>
                                <span>订单号：{{order.orderNo}}</span>
                                <span>{{order.paymentTypeDesc}}</span>
                            </p>
                            <p>
                                <span>应付金额：</span>
                                <span class="yingfu">{{order.payment}}元</span>
                            </p>
                        </div>
                    </div>
                    <div class="item-details">
                        <div>
                            <div class="d-left" v-for="(item,i) of order.orderItemVoList" :key="i">
                                <div>
                                    <img v-lazy="item.productImage">
                                </div>
                                <div>
                                    <p>{{item.productName}}</p>
                                    <p>{{item.currentUnitPrice}}元 X {{item.quantity}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-right">
                            <div v-if="order.status==20">
                                 <a>{{order.statusDesc}}</a>
                            </div>
                            <div v-else>
                                 <a @click="gotoPay(order.orderNo)">{{order.statusDesc}}</a>
                            </div>
                        </div> 
                    </div>
                </li>
            </ul>
            <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            @current-change="handleChange"
            >
            </el-pagination>
        </div>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import loading from './../components/Loading'
import {Pagination} from 'element-ui'
export default {
    name:"order-list",
    data(){
        return{
            pageSize:10,//一页十条
            pageNum:1,//当前第一页
            total:0,
            isLoading:true,//是否等待
            OrderList:[],//订单列表
        }
    },
    methods:{
        //去支付
        gotoPay(orderNo){
            this.$router.push({
                path:"/order/pay",
                query:{
                    orderNo:orderNo
                }
            })
        },
        getOrderList(){
            this.axios.get("/orders",{
                params:{
                    pageNum:this.pageNum
                }
            }).then(res=>{
                if(res.list.length==0){
                    this.$router.push("/order/ontdata");
                }
                this.OrderList=res.list;
                this.ProList=res.list.orderItemVoList;
                this.total=res.total;
                this.isLoading=false;
            })
        },
         //发生换页时自定触发
        handleChange(pageNum){
            this.pageNum=pageNum;
            this.getOrderList();
        },
    },
    mounted(){
        this.getOrderList();
    },
    components:{
            OrderHeader,loading,
            [Pagination.name]:Pagination
    }
}
</script>
<style scoped>
    .order-list .containe{
        padding: 30px 0px;
        background: #F5F5F5;
    }
    .order-list .containe .list .item{
        width: 1226px;
        margin: auto;
        background: #ffffff;
        border:1px solid #e5e5e5;
        margin-top: 20px;
    }
    .order-list .containe .list .item .item-info{
        height: 74px;
        background: #FFFAF7;
        line-height: 74px;
        padding: 0 20px;
        box-sizing: border-box;
       color: #666666;
       font-size: 16px;
    }
     .order-list .containe .list .item .item-info .info{
          display: flex;
        justify-content: space-between;
     }
      .order-list .containe .list .item .item-info .info span{
          margin-left: 10px;
      }
      .order-list .containe .list .item .item-info .info span.yingfu{
          color: #333333;
          font-size: 26px;
      }
      .order-list .containe .list .item .item-details{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-box;
          color: #333333;
          font-size: 20px;
      }
    .order-list .containe .list .item .item-details .d-left{
        display: flex;
        align-items: center;
    }
     .order-list .containe .list .item .item-details .d-left img{
         height: 112px;
     }
     .order-list .containe .list .item .item-details .d-right{
         color: #f60;
     }
     .order-list .containe .list .item .item-details .d-right a{
         cursor: pointer;
     }
</style>