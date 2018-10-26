<template>
    <div id="app">
        <!-- 头部 -->
        <Row class="padding-0-44 header" type="flex" align="middle">
            <Col span="2">
                <img src="./assets/manu.png" height="80rem" width="80rem" @click="goToHome"/>
            </Col>
            <Col span="5">
                <span>UNITEDSTORE</span>
            </Col>
            <Col span="6" offset="6" style="display:flex;align-items:center;">
                <Input type="text" placeholder="搜索"></Input>
                <Button @click="search">搜索</Button>
            </Col>
            <Col span="3" class="user">
                <div v-if="true">
                    <span style="font-size:1rem;cursor:pointer;" @click="goLogin">亲，请先登录</span>
                </div>
                <div v-else>
                    <Icon type="ios-cart" size="30"/>
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
                <router-view></router-view>
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
    data () {
            return {
            }
        },
        methods: {
            search(){
                alert("查询");
            },
            //首页
            goToHome(){
                this.$router.push('/');
            },
            goLogin(){
                this.$router.push('/login');
            },
            //用户
            goUser(){
                this.$router.push('/login');
            },
            logout(){
                alert("退出");
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
}
</style>
