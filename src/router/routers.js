import home from '../pages/index.vue';
import shop from '../pages/shop/shop.vue';

import login from '../pages/user/login.vue';
import registe from '../pages/user/registe.vue';
import shopCart from '../pages/user/shopCart.vue';
import buyed from '../pages/user/buyed.vue';
import userInfo from '../pages/user/userInfo.vue';

const routes = [
        //首页
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        //登录
        {
          path: '/login',
          name: 'login',
          component: login,
          children: [
            {
              //用户信息
              path: 'userInfo',
              name: 'userInfo',
              component: userInfo
            },
            {
              //我的购物车
              path: 'shopCart',
              name: 'shopCart',
              component: shopCart
            },
            {
              path: 'buyed',
              name: 'buyed',
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
            component: shop
        },
        //购物车
        {
            path: '/shopCart',
            name: 'shopCart',
            component: shopCart
        }
]

export default routes;