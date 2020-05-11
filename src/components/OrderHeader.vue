<template>
    <!-- 支付页面头部组件 -->
    <div class="order-header">
        <div class="container">
            <div class="logo">
                <a href="/#/index"></a>
            </div>
            <div class="info">
                <h2>{{title}}
                    <slot name="tip"></slot>
                </h2>
                <div class="uname">{{uName}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import './../assets/css/logo.css' 
import {mapState} from 'vuex'
export default {
    name:"order-header",
    data(){
        return{
           
        }
    },
    props:["title"],
    computed:{
        ...mapState(["uName"]),
    },
    components:{
        mapState
    }
}
</script>
<style scoped>
    .order-header{border-bottom: 2px solid #f60;}
    .order-header .container{
        width: 1226px;
        height: 112px;
        margin: auto;
        text-align: center;
        padding: 30px 0;
        box-sizing: border-box;  
        
    }
     .order-header .container .info{
         display: flex;
         justify-content: space-between;
         margin-left: 30px;
         line-height: 55px;
         margin-left: 80px;
         font-size: 28px;
         color: #333333;
     }
     .order-header .container .info>h2>span{
         display: inline-block;
         color: #999999;
         font-size: 14px;
         margin-left: 20px;
     }
     .order-header .container .info .uname{
         color: #666666;
         font-size: 16px;
     }
</style>