<template>
    <div class="alipay">
        <order-header title="确认支付"></order-header>
        <loading></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
import Loading from './../components/Loading'
import OrderHeader from './../components/OrderHeader'
export default {
    data(){
        return{
            orderId:this.$route.query.orderId,
            content:'',
        }
    },
    methods:{
        paySubmit(){
            this.axios.post("/pay",{
                orderId:this.orderId,
                orderName:'汤鹏的订单',
                amount:0.01,
                payType:1,
            }).then(res=>{
                this.content=res.content;
                setTimeout(()=>{
                    document.forms[0].submit();
                },100)
            })
        }
    },
    mounted(){
        this.paySubmit();
        console.log(this.orderId);
    },
    components:{
        Loading,OrderHeader
    }
}
</script>