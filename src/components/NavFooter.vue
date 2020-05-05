<template>
    <div class="footer">
        <div class="wai"></div>
        <div class="foo">
            <div class="shang">
                <a href="javascript:;">
                    <img src="/imgs/logo-footer.png" alt="">
                    <p>小米商城</p>
                </a>
            </div>
            <div class="zhong">
                <p class="t1">
                    <a href="https://github.com/tang19991013/xiaomi" target="_blank">汤鹏的GitHub地址</a>|
                    <a href="javascript:;">联系电话18211851997</a>|
                    <a href="https://blog.csdn.net/weixin_42733744" target="_blank">汤鹏的CSDN博客</a>
                </p>
                <p class="t2">
                        Copyright &copy;
                    <a href="">mi.51purse.com</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"nav-footer"
}
</script>
<style scoped>
    .footer{
         background: #333333;
    }
    .footer .wai{
        width: 1226;
        height: 4px;
        background: #FF7301;
    } 
    .footer .foo{
        width:1226px;
        height:234px;
        margin: auto;
        text-align: center;
        font-size: 16px;
        color: #999999;
    }
     .footer .foo .shang{
         width: 64px;
         height: 49px;
          margin: auto;  
          margin-top: 46px;   
     }
     .footer .foo .shang a{
         display: inline-block;
    }
     .footer .foo .shang img{
         height: 36px;
     }
     .footer .foo .shang p{
        color: #999999;
        margin-top: 5px;
     }
     .footer .foo .zhong a{
            color: #999999;
     }
      .footer .foo .zhong{
          width: 731px;
          height: 46px;
          margin: auto;
          margin-top: 40px;
      }
       .footer .foo .zhong .t2{
           margin-top: 10px;
       }
       .footer .foo .zhong .t2 a{
           color: #FF6600;
       }
       .footer .foo .zhong .t2 a:hover{
           text-decoration: underline;
       }
</style>