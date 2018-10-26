<template>
    <div>
        <Row type="flex" justify="center" align="middle" class="login">
            <Col span="6">
                <h2>登录</h2>
                <Row type="flex" align="middle">
                    <Col span="4">
                        <span>用户名：</span>
                    </Col>
                    <Col span="18">
                        <Input type="text" v-model="username"></Input>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span="4">
                        <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
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
    </div>
</template>
<script>
export default {
    data () {
        return {
            username:'',
            passwd: ''   
        }
    },
    methods: {
        handleSubmit () {
           alert("commit");
        }
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