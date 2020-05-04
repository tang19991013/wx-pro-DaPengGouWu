import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vueaxios,axios);
//axios.defaults.baseURL="/api"  //根据前端的跨域方式做调整——接口代理跨域
//axios.defaults.baseURL="easy-mock的地址"  //如果采用easy-mock方式伪造数据，那么这里的接口就要写成easy-mock平台提供的baseURL
//const mock=true; //mock开关
// if(mock){
//   require('./mock/api.js')
// }
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
      if(res.status==0){
        return res.data;
      }else if(res.status==10){
        window.location.href='/#/login';
      }else{
        alert(res.msg);
      }
  }
)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
