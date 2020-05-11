<template>
    <div class="proparams">
        <div class="rongqi" :class="{isfixed:isFixed}">
            <div class="name">
                <p>{{name}}</p>
            </div>
            <div class="params">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <a :href="`/#/details/${id}`">立即购买</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"nav-bar",
    props:["name","id"],
    data(){
        return{
            isFixed:false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.initHeight,false);
    },
    destroyed(){
        window.removeEventListener("scroll",this.initHeight,false);
    },
    methods:{
        initHeight(){
            let scrollTop=window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed=scrollTop>152?true:false;
        }
    }
}
</script>
<style scoped>
    .proparams .isfixed{
        width: 100% !important;
        position: fixed;
        top: 0;
        box-shadow: 0 5px 5px #cccccc;
        background: #ffffff;
        z-index: 10;
    }
    .proparams .rongqi{
        width: 1226px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        line-height: 70px;
    }
    .proparams .name{
        font-size: 18px;
        font-weight: bolder;
    }
    .proparams .params>a{
        color: #666;
        font-size: 14px;
        display: inline-block;
    }
   .proparams .params>a+span{
       margin:0 10px;
   }
   .proparams .params>a:last-child{
       width: 110px;
       height: 30px;
       margin-left: 10px;
       font-size: 12px;
        background-color:#FF6600;
        color: #FFFFFF;
        line-height: 30px;
   }
</style>