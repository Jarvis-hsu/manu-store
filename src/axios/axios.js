import axios from 'axios'
import Vue from 'vue'
import router from '../router'
import store from '../store'

axios.defaults.timeout = 60000; //请求超时一分钟

//http request 拦截器
axios.interceptors.request.use(
    //权限控制
)

//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response){
            switch(error.response.status){
                case 404:
                alert("lose the page");
            }
        }
        return Promise.reject(error.response);
    }
)

export default axios;