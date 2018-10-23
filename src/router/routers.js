import home from '../pages/index.vue';
import login from '../pages/user/login.vue'
import registe from '../pages/user/registe.vue'

const routes = [
        //首页
        {
          path: '/',
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
        }
      
]

export default routes;