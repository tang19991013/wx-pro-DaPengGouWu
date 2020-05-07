import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Index from './../views/Index'
import Product from './../views/Product'
import Details from './../views/Details'
import Cart from './../views/Cart'
import Order from './../views/Order'
import OrderConfirm from './../views/OrderConfirm'
import OrderList from './../views/OrderList'
import OrderPay from './../views/OrderPay'
import AliPay from './../views/AliPay'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    redirect:"/index",//重定向到主页面
    component: Home,
    children:[
      {
        path:"/index",
        name:"index",
        component:Index
      },
      {
        path:"/product/:id",
        name:"product",
        component:Product,
        props:true
      },
      {
        path:"/details/:id",
        name:"details",
        component:Details,
        props:true
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path:"/order",
    name:"order",
    component:Order,
    children:[
        {
          path:"list",
          name:"order-list",
          component:OrderList
        },
        {
          path:"confirm",
          name:"order-confirm",
          component:OrderConfirm
        },
        {
          path:"pay",
          name:"order-pay",
          component:OrderPay
        },
        {
          path:"alipay",
          name:"alipay",
          component:AliPay
        }   
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
