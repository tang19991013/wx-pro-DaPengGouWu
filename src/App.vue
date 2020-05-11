<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import './assets/css/reset.css'
import {mapMutations} from 'vuex'
export default {
  data(){
    return{
      res:{}
    }
  },
  methods:{
    ...mapMutations(["setCount"]),
     //获取用户购物车的数量
      getCartscount(){
         this.axios.get("/carts/products/sum").then(res=>{
           console.log("购物车数量："+res);
          this.setCount(res);
      })
    }
  },
  mounted(){
    this.getCartscount();
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
