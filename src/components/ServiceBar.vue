<template>
    <div class="service">
        <div class="rong">
            <ul>
                <li>
                    <span></span>预约维修服务
                </li>
                <li><span></span>7天无理由退货</li>
                <li><span></span>15天免费换货</li>
                <li><span></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .service .rong{
        width: 1226px;
       height: 60px;
        margin: auto;
        text-align: center;
        font-size: 16px;
        padding: 10px 0;
       
        color: #666666;
    }
    .service .rong li{
        display: inline-block;
        width: 24.9%;
         line-height: 60px;
        border-right: 1px solid #666666;
        
    }
     .service .rong li:last-child{
         border-right: 0;
     }
    .service .rong span{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(/imgs/icon-setting.png) no-repeat center;
        background-size: contain;
        vertical-align: middle;
        margin-right: 5px;
    }
    .service .rong li:nth-child(2) span{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(/imgs/icon-7day.png) no-repeat center;
        background-size: contain;
        vertical-align: middle;
    }
    .service .rong li:nth-child(3) span{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(/imgs/icon-15day.png) no-repeat center;
        background-size: contain;
        vertical-align: middle;
    }
    .service .rong li:last-child span{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(/imgs/icon-post.png) no-repeat center;
        background-size: contain;
        vertical-align: middle;
    }
</style>