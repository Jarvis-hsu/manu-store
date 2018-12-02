// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './axios/axios'
import iview from 'iview'
import 'iview/dist/styles/iview.css'; 

Vue.use(iview);

Vue.prototype.$store = store;
Vue.prototype.$http = http;

router.beforeEach((to, from, next) =>{
    if(to.path == "/shop/showProds"){
        sessionStorage.removeItem("prod");//产品清空
        store.commit("setProd", null);
    }
    next();
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
