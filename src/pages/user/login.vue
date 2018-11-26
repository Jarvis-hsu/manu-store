<template>
    <div>
        <Row type="flex" justify="center" align="middle" class="login" v-if="username==''||username==null">
            <Col span="6">
                <h2>登录</h2>
                <Row type="flex" align="middle">
                    <Col span="4">
                        <span><i>＊</i>用户名：</span>
                    </Col>
                    <Col span="18">
                        <Input type="text" v-model="loginName"></Input>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span="4">
                        <span><i>＊</i>密&nbsp;&nbsp;&nbsp;码：</span>
                    </Col>
                    <Col span="18">
                        <Input type="password" v-model="passwd"></Input>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col>
                        <Button @click="handleSubmit('formCustom')">登录</Button>
                    </Col>
                    <Col>
                        <Button :to="{path: 'registe'}" style="margin-left: 8px">注册</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row class="padding-0-44" v-else>
            <Col span="4">
                <Sider>
                    <Menu active-name="userInfo" theme="light" width="auto" @on-select="showInfo">
                        <MenuItem name="userInfo">我的信息</MenuItem>
                        <MenuItem name="shopCart">我的购物车</MenuItem>
                        <MenuItem name="buyed">已买到的商品</MenuItem>
                    </Menu>
                </Sider>
            </Col>
            <Col span="20">
                <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    inject: ['reload'],
    data () {
        return {
            username: sessionStorage.getItem("username"),
            loginName: '',
            passwd: ''   
        }
    },
    created(){
        
    },
    methods: {
        async handleSubmit () {
            var _this = this;
            var isSuccess = false;
            if(_this.validate()){
                var res =await this.$http('../../../static/data/user/user.json').catch(function(error){
                    console.error(error.message);
                });
                for(var i=0; i<res.data.length; i++){                
                    if(res.data[i].username == _this.loginName&&res.data[i].password == _this.passwd){
                        isSuccess = true;
                        break;
                    }
                }
                if(isSuccess){
                    // //登录成功
                    sessionStorage.setItem("username", _this.loginName);
                    this.$store.commit("setUserName", _this.loginName);
                    this.$router.push("/");
                }else{
                    alert("用户名或密码不正确");
                }

                
            }
        },
        //验证
        validate(){
            var _this = this;
            if(_this.loginName == ""){
                alert("用户名不能为空");
                return false
            }
            else if(_this.passwd == ""){
                alert("密码不能为空");
                return false;
           }
           else{
               return true;
           }
        },
        //信息
        showInfo(name){
            if(name == "shopCart"){
                this.$router.push('/login/shopCart');
            }
            else if(name == "buyed"){
                this.$router.push('/login/buyed');
            }
            else{
                this.$router.push('/login/userInfo');
            }
        },
    }
}
</script>
<style lang="scss">
.login{
    margin: 2rem 0;
    min-height: 10rem;
    height: 20rem;
    span {
        font-size: 0.8rem;
        i {
            color: red;
        }
    }
    .ivu-row-flex {
        margin: 1.5rem 0;
    }
    button {
        color: $TEXT_COLOR_WHITE;
        background-color: $MAIN_COLOR;
        border-radius: unset;
        &:hover {
            color: $TEXT_COLOR_WHITE;
            background-color: $MAIN_COLOR;
            border-color: $MAIN_COLOR;
        }
    }
    a {
        color: $TEXT_COLOR_WHITE;
        background-color: $COLOR_BLACK;
        border-radius: unset;
        &:hover{
            color: $TEXT_COLOR_WHITE;
            background-color: $COLOR_BLACK;
            border-color: $COLOR_BLACK;
        }
    }
}

</style>