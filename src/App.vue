<template>
    <div id="app">
        <!-- 头部 -->
        <Row class="padding-0-44 header" type="flex" align="middle">
            <Col span="7" class="logo">
                <img src="../static/img/manu.png" height="80rem" width="80rem" @click="goToHome"/>
                <span>UNITEDSTORE</span>
            </Col>
            <Col span="6" offset="8" style="display:flex;align-items:center;">
                <Input type="text" placeholder="搜索"></Input>
                <Button @click="search">搜索</Button>
            </Col>
            <Col span="3" class="user">
                <div v-if="user==''">
                    <span style="font-size:1rem;cursor:pointer;" @click="goLogin">亲，请先登录</span>
                </div>
                <div v-else>
                    <Icon type="ios-cart" size="30" @click="goCart"/>
                    <Icon type="ios-contact" size="30" @click="goUser" />
                    <Icon type="ios-log-out" size="30" @click="logout"/>  
                </div>          
           </Col>
        </Row>
        <!-- 导航bar -->
        <Row>
            <Col>
                <nav-bar></nav-bar>
            </Col>
        </Row>
        <!-- 内容 -->
        <Row class="content">
            <Col>
                <router-view v-if="isRouterAlive"></router-view>
            </Col>
        </Row>
        <!-- 底部 -->
        <Row class="footer">
            <Col>
                <foot-bar></foot-bar>
            </Col>
        </Row>
    </div>
</template>

<script>
import NavBar from './components/home/NavBar';
import FootBar from './components/home/FootBar';

export default {
    name: 'App',
    components: {
        NavBar: NavBar,
        FootBar: FootBar
    },
    provide(){
        return {
            reload: this.reload
        }
    },
    data(){
        return {
            user: "",
            isRouterAlive: true
        }
    },
    watch: {
        '$route': 'getInfo'
    },
    methods: {
        search(){
            alert("查询");
        },
        //首页
        goToHome(){
            this.$router.push('/');
        },
        //登录
        goLogin(){
            this.$router.push('/login');
        },
        //用户
        goUser(){
            this.$router.push('/login');
        },
        //注销
        logout(){
            sessionStorage.clear();
            this.$store.commit("setUserName", "");
            this.$router.push('/login');
        },
        //购物车
        goCart(){
            this.$router.push('/shopCart');
        },
        reload(){
            this.isRouterAlive = false;
            this.$nextTick(function(){
                this.isRouterAlive = true
            })
        },
        getInfo(){
            this.user = this.$store.state.username;
            this.reload();
        }
    }
    
}
</script>

<style lang="scss">
@import './assets/css/public/var.scss';
@import './assets/css/common/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 82rem;
}
</style>
