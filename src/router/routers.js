import home from '../pages/index.vue';
import login from '../pages/user/login.vue';
import registe from '../pages/user/registe.vue';
import shop from '../pages/shop/shop.vue';

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
          component: login
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
        }
      
]

export default routes;