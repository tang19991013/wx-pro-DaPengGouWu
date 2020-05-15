import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Index from './../views/Index'
import Order from './../views/Order'



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
        props:true,
      component: () => import(/* webpackChunkName: "Product" */ '../views/Product.vue')

      },
      {
        path:"/details/:id",
        name:"details",
        props:true,
      component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue')

      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')

    
  },
  {
    path:"/order",
    name:"order",
    component:Order,
    children:[
        {
          path:"list",
          name:"order-list",
          component: () => import(/* webpackChunkName: "OrderList" */ '../views/OrderList.vue')

        },
        {
          path:"confirm",
          name:"order-confirm",
          component: () => import(/* webpackChunkName: "OrderConfirm" */ '../views/OrderConfirm.vue')

        },
        {
          path:"pay",
          name:"order-pay",
          component: () => import(/* webpackChunkName: "OrderPay" */ '../views/OrderPay.vue')

        },
        {
          path:"alipay",
          name:"alipay",
          component: () => import(/* webpackChunkName: "alipay" */ '../views/AliPay.vue')
        },
        {
          path: 'notdata',
          name: 'not-data',
          component: () => import(/* webpackChunkName: "not-data" */ '../views/NotData.vue')
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
