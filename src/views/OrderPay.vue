<template>
    <div>
       <order-header title="支付订单">
       </order-header>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import {mapState} from 'vuex'
export default {
    name:'order-pay',
    components:{
            OrderHeader
        },
    computed:{
        ...mapState["uName"],
    },
}
</script>