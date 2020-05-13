<template>
    <div>
        <router-view></router-view>
          <!-- 服务条组件 -->
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>

import NavFooter from './../components/NavFooter'
import ServiceBar from './../components/ServiceBar'
export default {
    name:"order-home",
    components:{
        NavFooter,ServiceBar
    }
}
</script>