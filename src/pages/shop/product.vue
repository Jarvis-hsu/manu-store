<template>
    <div class="prodDetail">
        <Row>
            <Col span="16" style="display:flex;align-items:center;justify-content:center;">
                <img :src="prodImgUrl">
            </Col>
            <Col span="8">
                <div class="prodInfo">
                    <span>{{prodName}}</span>
                    <span>{{prodPrice}}</span>
                    <div style="width:100%; height:1px; background:#515a6e;"/>
                    <div class="input">
                        <span>尺寸</span>
                        <RadioGroup type="button">
                            <Radio v-for="item in sizeList" :label="item.name">{{item.name}}</Radio>
                        </RadioGroup>
                    </div>
                    <div style="width:100%; height:1px; background:#515a6e;"/>
                    <div class="input">
                        <span>数量</span>
                        <div class="count">
                            <Button @click="minus">-</Button>
                            <Input v-model="num" readonly></Input>
                            <Button @click="plus">+</Button>
                        </div>
                    </div>
                    <div style="width:100%; height:1px; background:#515a6e;"/>
                    <div class="right">
                        <span>总价：{{totalPrice}}</span>
                    </div>
                </div>
                <Button class="addCar" type="success" size="large" long @click="addCar">加入购物车</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data (){
        return {
            prodName: '',
            prodPrice: '',
            prodImgUrl: '',
            sizeList: [
                {name: 'S'},
                {name: 'M'},
                {name: 'L'},
            ],
            num: 1,
            price: 0
        }
    },
    computed:{
        totalPrice: function(){
            var total = '';
            var totalFee = this.price * this.num;
            return total = '¥'+ totalFee + '.00';
        }　
    },
    created(){
        var prodObj = JSON.parse(sessionStorage.getItem("prod"));
        this.prodName = prodObj.name;
        this.price = prodObj.price;
        this.prodPrice = this.formatPrice(prodObj.price);
        this.prodImgUrl = '../'+prodObj.url;
    },
    methods: {
        formatPrice(price){
            // var price = '';
            // price = this.$store.state.prod.price;
            if(price != 0||price != null){
                price = '¥'+ price + '.00';
            }
            else{
                price = '¥0.00';
            }
            return price;
        },
        minus(){
            if(this.num>1){
                this.num = this.num-1;
            }
        },
        plus(){
            this.num = this.num+1;
        },
        addCar(){
            alert("add car success");
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/css/public/var.scss';

.prodDetail {
    img {
        width: 25rem;
        height: 25rem;
    }
    .prodInfo {
        width: 100%;
        height: auto;
        padding: 1rem;
        border: 1px solid $COLOR_BLACK;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        span {
            margin: 0.5rem 0;
            font-size: 1.2rem;
            font-weight:500;
        }
        .input {
            height: 5rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                margin: 0 2rem 0 0;
            }
            .count {
                display: flex;
                justify-content: center;
                align-items: center;
                .ivu-input{
                    height: 2.5rem;
                    width: 5rem;
                    text-align: center;
                }
                .ivu-btn {
                    height: 2.5rem;
                    width: 4rem;
                    text-align: center;
                }
            }
        }
        .ivu-btn{
            &:hover {
                color: $TEXT_COLOR_BLACK;
                border-color: $TEXT_COLOR_BLACK;
            }
            &:focus {
                color: $TEXT_COLOR_BLACK;
                border-color: $TEXT_COLOR_BLACK;
                box-shadow: 0 0 2px $TEXT_COLOR_BLACK;
            }
    }
    }
    .addCar {
        margin: 1rem 0;
        height: 3.5rem;
        font-size: 1.2rem;
    }
    
    .ivu-radio-wrapper{
        &:hover {
            color: $TEXT_COLOR_BLACK;
            border-color: $TEXT_COLOR_BLACK;
        }
    }

    .ivu-radio-wrapper-checked {
        border-color: $TEXT_COLOR_BLACK;
        color: $TEXT_COLOR_BLACK;
        font-weight: bold;
        box-shadow: -1px 0 0 0 $COLOR_BLACK;
        &:first-child {
            border-color: $TEXT_COLOR_BLACK;
            color: $TEXT_COLOR_BLACK;
        }
    }
}
</style>

