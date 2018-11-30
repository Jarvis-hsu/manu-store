import home from '../pages/index.vue';

import login from '../pages/user/login.vue';
import registe from '../pages/user/registe.vue';
import shopCart from '../pages/user/shopCart.vue';
import buyed from '../pages/user/buyed.vue';
import userInfo from '../pages/user/userInfo.vue';

import shop from '../pages/shop/shop.vue';
import product from '../pages/shop/product.vue';
import showProds from '../pages/shop/showProds.vue';


const routes = [
        //首页
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: home,
          meta: {
            reload: true
          }
        },
        //登录
        {
          path: '/login',
          name: 'login',
          component: login,
          meta: {
            reload: true
          },
          children: [
            {
              //用户信息
              path: '/login/userInfo',
              component: userInfo
            },
            {
              //我的购物车
              path: '/login/shopCart',
              component: shopCart
            },
            {
              //已买到
              path: '/login/buyed',
              component: buyed
            }
          ]
        },
        //注册
        { 
            path: '/registe',
            name: 'registe',
            component: registe
        },
        //商店
        {
            path: '/shop',
            name: 'shop',
            component: shop,
            children: [
              {
                //产品详细
                path: 'product',
                name: 'product',
                component: product
              },
              {
                //产品展示
                path: 'showProds',
                name: 'showProds',
                component: showProds
              }
            ]
        },
        //购物车
        {
            path: '/shopCart',
            name: 'shopCart',
            component: shopCart
        }
]

export default routes;