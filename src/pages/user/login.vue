<template>
    <div class="login">
        <Row>
            <Col span="24">
                <h2>登录</h2>
            </Col>        
        </Row>
        <Row>
            <Col span="7" offset="8">
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                    <FormItem label="用户名" prop="username">
                        <Input type="text" v-model="formCustom.username"></Input>
                    </FormItem>
                    <FormItem label="密码" prop="passwd">
                        <Input type="password" v-model="formCustom.passwd"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
                        <Button :to="{path: 'registe'}" style="margin-left: 8px">注册</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your password'));
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your password again'));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('The two input passwords do not match!'));
            } else {
                callback();
            }
        };
        const validateAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('Age cannot be empty'));
            }
            // 模拟异步验证效果
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('Please enter a numeric value'));
                } else {
                    if (value < 18) {
                        callback(new Error('Must be over 18 years of age'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };

        return {
            formCustom: {
                username: '',
                passwd: '',
               
            },
            ruleCustom: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>
<style lang="scss">
.login{
    margin: 2rem 0;
}

</style>