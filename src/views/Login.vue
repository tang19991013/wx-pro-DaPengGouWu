<template>
    <div class="login">
        <div class="login-header">
            <a href="/#/index">
                <img v-lazy="'/imgs/login-logo.png'" alt="">
            </a>
        </div>
        <div class="login-body">
            <div class="rq">
                    <div class="log">
                        <div class="login-style">
                            <span class="active">账号登录</span>
                            <span>扫码登录</span>
                        </div>
                        <div class="style1">
                            <div class="uname">
                                <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="uname">
                            </div>
                            <div class="upwd">
                                <input type="password" placeholder="密码" v-model="upwd">
                            </div>
                            <div>
                                <input type="checkbox" name="" id="mima" v-model="check">
                                <label for="mima">记住密码</label>
                            </div>
                            <button class="btn" @click="login">登录</button>
                            <p>
                                <a href="">手机短信登录/注册</a>
                                <span>
                                     <a href="">立即注册</a><span>|</span>
                                    <a href="">忘记密码？</a>
                                </span>
                            </p>
                        </div>
                        <div class="style2">
                            <img src="" alt="">
                        </div>
                </div>
            </div>     
        </div>
        <div class="login-footer">
            <p>
                <a href="">简体</a>
                 <a href="">繁体</a>
                  <a href="">English</a>
                   <a href="">常见问题</a>
                    <a href="">隐私政策</a>
            </p>
            <p>
                小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
            </p>
        </div>
    </div>
</template>
<script>
import './../assets/css/reset.css'
import {mapMutations,mapState} from 'vuex'
export default {
    name:"login",
    data(){
        return{
            uname:"",
            upwd:"",
            userId:"",
            check:false,//是否记住密码
        }
    },
    computed:{
        ...mapState(["uName"])
    },
    methods:{
        ...mapMutations(["setUname"]),
        login(){
           this.axios.post("/user/login",{
                username:this.uname,
                password:this.upwd
            }).then(res=>{
                console.log(res);
                if(this.check){
                    localStorage.setItem("uname",this.uname);
                }else{
                    sessionStorage.setItem("uname",this.uname);
                }
                // this.setUname(res.username);
                this.$router.push("/index");
            })
        },
    }
}
</script>
<style scoped>
/* 登录头部分 */
    .login .login-header{
        width: 1226px;
        height: 112px;
        margin: auto;
        text-align: left;  
    }
    .login .login-header a{
       display: inline-block;      
    }
    .login .login-header img{
        height: 100%;     
    }
    /* 登录主体部分 */
    .login .login-body{
        width: 100%;
        height: 576px;
        background: url('/imgs/login-bg.jpg') no-repeat 50%;
    }
    .login .login-body .rq{
        width: 1226px;
        height: 100%;
        margin: auto;
        position: relative;
    }
     .login .login-body .rq .log{
         width: 410px;
         height: 510px;
         position: absolute;
         top: 29px;
         right: 20px;
         background-color:#ffffff ;
         padding:40px 31px 0 31px;
         box-sizing: border-box;
     }
     .login .login-body .rq .log .login-style{
         margin-bottom: 30px;
     }
      .login .login-body .rq .log .login-style span{
          display: inline-block;
          width: 97px;
          height: 23px;
          font-size: 24px;
          font-weight: bold;
          color: #666666;
          line-height: 23px;
          cursor: pointer;
      }
      .login .login-body .rq .log .login-style span:first-child{
          border-right: 1px solid  #D7D7D7;
          padding-right: 34px;
      }
       .login .login-body .rq .log .login-style span:last-child{
           margin-left: 34px;
       }
       .login .login-body .rq .log .login-style span.active{
           color: #FF6600;
       }
        .login .login-body .rq .log .style1{
            width: 348px;
            height: 398px;
        }
         .login .login-body .rq .log .style1 .uname,.upwd{
             margin-bottom: 20px;
         }
        .login .login-body .rq .log .style1 .uname>input,.upwd>input,.btn{
            width: 100%;
            height: 50px;
            padding-left: 5px;
            border:1px solid rgba(229,229,229,1);
        }
         .login .login-body .rq .log .style1 .btn{
             background: #FF6600;
             color: #FFFFFF;
             margin-bottom: 20px;
             cursor: pointer;
         }
         .login .login-body .rq .log .style1>p{
             display: flex;
             justify-content: space-between;
              font-size: 14px;
         }
         .login .login-body .rq .log .style1>p span{
              color: #999999;
              margin: 0 5px;
         }
         .login .login-body .rq .log .style1>p>a{
             color: #FF6600;
            
         }
         .login .login-body .rq .log .style1>p>span a{
             color: #999999;
         }
         .login .login-body .rq .log .style2{
             width: 349px;
             height: 306px;
         }
         .login .login-footer p:first-child{
             font-size: 16px;
             text-align: center;
             padding-top: 60px;
             margin-bottom: 20px;
         }
         .login .login-footer p a{
             color: #999;
             display: inline-block;
             margin-left: 10px;
             height: 21px;
             line-height: 21px;
         }
         .login .login-footer p a:first-child{
             margin-left: 0;
         }
         .login .login-footer p a::after{
             content: "";
            width: 1px;
            height: 21px;
            border-right: 1px solid #999;
            margin-left: 10px;
         }
         .login .login-footer p a:last-child::after{
             display: none;
         }
          .login .login-footer p:last-child{
              text-align: center;
              height: 14px;
              line-height: 14px;
              color: #999999;
              font-size: 14px;
          }
</style>