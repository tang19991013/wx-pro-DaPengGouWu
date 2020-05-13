import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import {Message,MessageBox} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'


Vue.use(Vueaxios,axios);
Vue.component(Message);
Vue.component(MessageBox);
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg',//图片加载是等待的动画
})
Vue.prototype.message=Message;
Vue.prototype.messagebox=MessageBox;
axios.defaults.baseURL="/api"  //根据前端的跨域方式做调整——接口代理跨域
axios.defaults.timeout=6000;  //发送请求超时长
axios.interceptors.response.use(
  (config)=>{
    /**
     * 服务端返回的数据保存在config.data
     * config.data={  
     *   status:0// 状态码
     *      0代表成功
     *      10代表未登录
     *    data:{}//保存的数据，给前端的数据
     *    msg:""//错误消息
     * }
     */
    let res=config.data;
    let  path=location.hash; //地址栏中http://localhost:8080/后面的所有路由     例如： #/login
      if(res.status==0){
        return res.data;
      }else if(res.status==10){
        if(path != '#/index'){
          window.location.href='/#/login';
        }
      }else{
        this.message.warning(res.msg);
      }
  }
)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
