<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    //第一种：mock 本地加载请求静态的JSON文件的形式
    // this.axios.get("/mock/user/login.json").then(
    //   res=>{
    //       this.res=res
    //   }
    // )
    //第二种：mock 通过easy-mock平台实现
    //   this.axios.get("/user/login").then(
    //     res=>{
    //         this.res=res
    //     }
    //   )
    //第三种：本地集成mockjs实现数据mock
    //第一步：通过npm i -s mockjs
     //   this.axios.get("/user/login").then(
    //     res=>{
    //         this.res=res
    //     }
    //   )
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
