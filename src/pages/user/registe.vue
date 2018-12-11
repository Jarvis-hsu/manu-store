<template>
    <div>
        <Row type="flex" justify="center" align="middle"  class="registe">
            <Col span="6">
                <h2>欢迎加入曼联</h2>
                <Row type="flex" align="middle">
                    <Col span="5">
                        <span><i>＊</i>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span>
                    </Col>
                    <Col span="17">
                        <Input type="text" v-model="username"></Input>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span="5">
                        <span><i>＊</i>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                    </Col>
                    <Col span="17">
                        <Input type="password" v-model="passwd"></Input>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span="5">
                        <span><i>＊</i>确认密码：</span>
                    </Col>
                    <Col span="17">
                        <Input type="password" v-model="passwdCheck"></Input>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span="5">
                        <span>&nbsp;&nbsp;邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span>
                    </Col>
                    <Col span="17">
                        <Input type="text" v-model="email"></Input>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col span="4">
                        <Button type="primary" style="background-color: rgb(212, 0, 0);border: 1px solid rgb(212, 0, 0)" @click="handleSubmit('formCustom')">提交</Button>
                    </Col>
                    <Col span="4">
                        <Button @click="handleReset()" style="margin-left: 8px">重置</Button>
                    </Col>
                    <Col span="4">
                        <Button @click="back()" style="margin-left: 8px">返回</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>

</template>
<script>
export default {
    data () {
        return {
            username: '',
            passwd: '',
            passwdCheck: '',
            email:''
        }
    },
    methods: {
        async handleSubmit () {
            var _this = this;

            if(this.valicate()){
                var res =await this.$http('../../../static/data/user/user.json');
                for(var i=0; i<res.data.length; i++){                
                    if(res.data[i].username == _this.username){
                        alert("用户名已存在");
                        break;
                    }
                }
            }
            
        },
        valicate(){
            var _this = this;
            var isPass = true;
            var valiData = [
                {
                    "val": _this.username,
                    "cn":"用户名"
                },
                {
                    "val": _this.passwd,
                    "cn":"密码"
                },
                {
                    "val": _this.passwdCheck,
                    "cn":"确认密码"
                },
            ];
            //判空
            for(var j=0, len=valiData.length; j<len; j++){
                if(this.isEmpty(valiData[j].val)){
                    isPass = false;
                    alert(valiData[j].cn+"不可为空");
                    break;
                }
            }
            //密码再次验证
            if(_this.passwd != _this.passwdCheck){
                alert("两次输入的密码不一致");
                isPass = false;
            }

            return isPass;
        },
        
        isEmpty(data){
            var isEmpty = false;
            if(data == ""|| data == null){
                isEmpty = true; 
            }
            return isEmpty;
        },

        handleReset(){
            this.username = '';
            this.passwd = '';
            this.passwdCheck = '';
            this.email = '';
        },

        back(){
            this.$router.push("/login");
        }
    }
}
</script>
<style lang="scss">
.registe {
    margin: 2rem 0;
    min-height: 10rem;
    height: 20rem;
    span {
        font-size: 0.8rem;
        width: 4rem;
        i {
            color: red;
        }
    }
    .ivu-row-flex {
        margin: 1.5rem 0;
    }
    button {
        color: $TEXT_COLOR_WHITE;
        background-color: $COLOR_BLACK;
        border-radius: unset;
        border: 1px solid $COLOR_BLACK;
        &:hover {
            color: $TEXT_COLOR_WHITE;
            background-color: $COLOR_BLACK;
            border: 1px solid $COLOR_BLACK;
        }
    }
    // a {
    //     color: $TEXT_COLOR_WHITE;
    //     background-color: $COLOR_BLACK;
    //     border-radius: unset;
    //     &:hover{
    //         color: $TEXT_COLOR_WHITE;
    //         background-color: $COLOR_BLACK;
    //         border-color: $COLOR_BLACK;
    //     }
    // }
}

</style>