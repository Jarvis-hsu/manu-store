<template>
    <div>
        <Row type="flex" justify="center" align="middle"  class="registe">
            <Col span="6">
                <h2>欢迎加入曼联</h2>
                <Row type="flex" align="middle">
                    <Col span="4">
                        <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                    </Col>
                    <Col span="18">
                        <Input type="password" v-model="passwd"></Input>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span="4">
                        <span>确认密码：</span>
                    </Col>
                    <Col span="18">
                        <Input type="password" v-model="passwdCheck"></Input>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span="4">
                        <span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>
                    </Col>
                    <Col span="18">
                        <Input type="text" v-model="age" number></Input>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col>
                        <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                    </Col>
                    <Col>
                        <Button @click="handleReset()" style="margin-left: 8px">重置</Button>
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
            passwd: '',
            passwdCheck: '',
            age: ''
        }
    },
    methods: {
        handleSubmit (name) {
            alert("committtt");
        },
        handleReset (name) {
            alert("reset");
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