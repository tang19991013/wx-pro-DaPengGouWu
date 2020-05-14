<template>
    <div class="nodata">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
            </template>
        </order-header>
        <div class="containe">
            <div class="content">
                <div class="img">
                    <img src="/imgs/icon-no-data.png">

                </div>
                <p>暂无提交的订单记录</p>
            </div>
        </div>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
export default {
    name:"not-data",
    data(){
        return{}
    },
    components:{
        OrderHeader
    }
}
</script>
<style scoped>
    .nodata .containe{
        width: 100%;
        height: 300px;
        background: #f5f5f5;
        padding: 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
     .nodata .containe .content{
         width: 260px;
         height: 184px;
         text-align: center;
    }
    .nodata .containe  img{
        width: 260px;
    }
    .nodata .containe  p{
        color: #999999;
        font-size: 20px;
    }
</style>