<template>
    <div class="registe">
        <Row>
            <Col span="24">
                <h2>欢迎加入曼联</h2>
            </Col>        
        </Row>
        <Row>
            <Col span="7" offset="8">
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                    <FormItem label="密码" prop="passwd">
                        <Input type="password" v-model="formCustom.passwd"></Input>
                    </FormItem>
                    <FormItem label="确认密码" prop="passwdCheck">
                        <Input type="password" v-model="formCustom.passwdCheck"></Input>
                    </FormItem>
                    <FormItem label="年龄" prop="age">
                        <Input type="text" v-model="formCustom.age" number></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                        <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
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
                callback(new Error('密码不能为空'));
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
                callback(new Error('确认密码不能为空'));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('两次输入的密码不一致'));
            } else {
                callback();
            }
        };
        const validateAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            // 模拟异步验证效果
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字'));
                } else {
                    if (value < 18) {
                        callback(new Error('年龄未满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };

        return {
            formCustom: {
                passwd: '',
                passwdCheck: '',
                age: ''
            },
            ruleCustom: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
                age: [
                    { validator: validateAge, trigger: 'blur' }
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
.registe {
    margin: 2rem;
}

</style>