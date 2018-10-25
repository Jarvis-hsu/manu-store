<template>
    <div class="padding-0-44 footBar">
        <Row>
            <Col span="4" offset="2">
                <span class="largeFont">注册并享受10%折扣</span>
            </Col>
            <Col span="6" offset="1">
                <span class="midFont">抢先获取最新产品和促销信息</span>
            </col>
            <Col span="6" offset="2">
                <Input type="text" placeholder="电子邮件地址"></Input>
            </Col>
            <Col span="1">
                <Button @click="commitEmail">提交</Button>
            </Col>
        </Row>
        <Row class="footNav">
            <!-- 我的帐户 -->
            <Col span="2" offset="6">
                <span>我的帐户</span>
                <ul>
                    <li v-for="(item, index) in user">
                        {{item.name}}
                    </li>
                </ul>
            </Col>
            <!-- 客户服务 -->
            <Col span="2">
                <span>客户服务</span>
                <ul>
                    <li v-for="(item, index) in custom">
                        {{item.name}}
                    </li>
                </ul>
            </Col>
            <!-- 支付方式 -->
            <Col span="2">
                <span>支付方式</span>
                <ul>
                    <li v-for="(item, index) in pay">
                        {{item.name}}
                    </li>
                </ul>
            </Col>
            <!-- 在线安全 -->
            <Col span="2">
                <span>在线安全</span>
                <ul>
                    <li v-for="(item, index) in security">
                        {{item.name}}
                    </li>
                </ul>
            </Col>
            <!-- 已验证服务 -->
            <Col span="2">
                <span>已验证服务</span>
                <ul>
                    <li v-for="(item, index) in validate">
                        {{item.name}}
                    </li>
                </ul>
            </Col>
            <!-- 社交媒体 -->
            <Col span="2">
                <span>社交媒体</span>
                <ul>
                    <li v-for="(item, index) in media">
                        {{item.name}}
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'FootBar',
    data () {
        return {
            user:[
                {name:'我的帐户'},
                {name:'跟踪我的订单'},
                {name:'如何下单'},
            ],
            custom:[
                {name:'联系我们'},
                {name:'常见问题'},
                {name:'送货选项'},
                {name:'退货与退款'},
                {name:'关于我们'},

            ],
            pay:[
                {name:'可接受的付款'}
            ],
            security:[
                {name:'安全购物'},
                {name:'隐私'},
                {name:'条款与规则'},
            ],
            validate:[
                {name:'secure'}
            ],
            media:[
                {name:'Facebook'},
                {name:'Twitter'},
                {name:'Pinterest'},
                {name:'Instagram'},
                {name:'Manutd.com'},

            ]
        }
    },
    methods: {
        commitEmail(){
            alert("commit email!");
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/css/public/var.scss';

.footBar {
    height: 3rem;
    color: $TEXT_COLOR_WHITE;
    background-color: $MAIN_COLOR;
    position: relative;
    .largeFont {
        font-size: 1.3rem;
    }
    .midFont{
        font-size: 1rem;
    }
    .ivu-row {
        line-height: 3rem;
        button {
            height:2rem;
            width:2rem;
            background-color: $COLOR_BLACK;
            border:none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            &:hover{
                background-color: $COLOR_BLACK;
            }
            span {
                font-size: 0.6rem;
                color: $TEXT_COLOR_WHITE;
                &:hover {
                    background-color: $COLOR_BLACK;
                    border: none;
                }
            }
        }
    }
    .footNav{
        text-align: left;
        .ivu-col {
            span:first-child {
                font-weight: bold;
                font-size: 1rem;
            }
            ul {
                margin: 1rem 0;
                li {
                    margin: 0;
                    height: 1.8rem;
                    font-size: 0.8rem;
                    text-align: left;
                }
            }
        }
    }
}


</style>