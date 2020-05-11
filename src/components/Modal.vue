<template>
    <transition name="slide">
        <!-- 模态框组件 -->
         <div class="modal" v-show="showModal">
         <div class="mask"></div>
         <div class="modal-dialog">
                <div class="modal-header">
                    <p class="tishi">提示</p>
                    <a href="javascript:;" class="icon-close" @click="close"></a>
                </div>
                <div class="modal-boody">
                    <p>商品添加成功！</p>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" @click="gotoCart">去购物车查看</a>
                </div>
            </div>
        </div>
   </transition>
   
</template>
<script>
export default {
    data(){
        return{}
    },
    props:["showModal"],
    methods:{
        close(){
            this.$emit("close");
        },
        gotoCart(){
            this.$router.push("/cart");
        }
    }
}
</script>
<style scoped>
    .modal{
        width: 100%;
        height: 100%;
        position: fixed;
         top: 0;
        left: 0;
        z-index: 10;
       
    }
    
      .slide-enter-acitve{
          top: 0;
      }
      .slide-leave-active{
          top:-100%;
      }
       .slide-enter{
        top:-100%;
     }
    .modal .mask{
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #000000;
        opacity: .5;
        top: 0;
        left: 0;
    }
     .modal .modal-dialog{
         position: absolute;
         left: 50%;
         top: 50%;
         width: 660px;
         height: auto;
         transform: translate(-50%,-50%);
          transition: all .5s;
     }
     .modal .modal-dialog .modal-header{
         height: 60px;
         line-height: 60px;
         padding: 0 25px;
         background: #e5e5e5;
         color: #333333;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
     }
      .modal .modal-dialog .modal-header .icon-close{
          position: absolute;
          top: 23px;
          right: 25px;
          width: 14px;
          height: 14px;
          background: url('/imgs/icon-close.png') no-repeat center;
          background-size:contain; 
          transition:transform .3s;
      }
      .modal .modal-dialog .modal-header .icon-close:hover{
          transform: scale(1.5);
      }
      .modal .modal-dialog .modal-boody{
          width: 100%;
          background: #FFFFFF;
          padding: 42px 40px 50px;
          box-sizing: border-box;
          text-align: left;
          font-size: 14px;
      }
       .modal .modal-dialog .modal-footer{
           height: 82px;
           text-align: center;
           background-color: #e5e5e5;
       }
       .modal .modal-dialog .modal-footer .btn{
           display: inline-block;
           width: 160px;
           height: 40px;
           font-size: 16px;
           font-weight:bold;
           background-color:#FF6600;
           color: #FFFFFF;
           line-height: 40px;
           margin: 21px auto;
       }
</style>