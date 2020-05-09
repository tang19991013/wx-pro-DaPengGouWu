import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uName:"",//用户名
    proCount:0,//购物车数量
  },
  mutations: {
    setUname(state,uname){
      this.state.uName=uname;
    },
    setCount(state,count){
      this.state.proCount=count;
    }
  },
  actions: {
    
    // login(context,params){ //context代表整个vuex对象
    //   (async function(){
    //     var result=await axios.post("/users/signin",
    //     params);
    //     context.commit("setUname",res.username);
    //   })()
    //}
  },
  modules: {
  }
})
