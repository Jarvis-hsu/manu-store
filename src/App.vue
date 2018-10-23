<template>
    <div id="app">
        <!-- 头部 -->
        <Row class="padding-0-44 header" type="flex" align="middle">
            <Col span="2">
                <img src="./assets/manu.png" height="80rem" width="80rem" />
            </Col>
            <Col span="5">
                <span>UNITEDSTORE</span>
            </Col>
            <Col span="6" offset="9" style="display:flex;align-items:center;">
                <Input type="text" placeholder="搜索"></Input>
                <Button @click="search">搜索</Button>
            </Col>
            <Col span="1">
                <Icon type="ios-contact" size="30" @click="goUser" />
            </Col>
            <Col span="1">
                <Icon type="ios-log-out" size="30" @click="logout"/>            
           </Col>
        </Row>
        <Row>
            <nav-bar></nav-bar>
        </Row>
        <!-- 内容 -->
        <Row class="padding-0-44 content">
            <Col>
                <router-view />
            </Col>
        </Row>
        <!-- 底部 -->
        <Row class="padding-0-44 footer">

        </Row>
    </div>
</template>

<script>
import NavBar from './components/home/NavBar';

export default {
    name: 'App',
    components: {
        NavBar: NavBar
    },
    data () {
            return {
            }
        },
        methods: {
            search(){
                alert("查询");
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
