<template>
    <div class="prodDetail">
        <Row>
            <Col span="16" style="display:flex;align-items:center;justify-content:center;">
                <img src="../../../static/img/clo-1.jpg">
            </Col>
            <Col span="8">
                <div class="prodInfo">
                    <span>{{prodName}}</span>
                    <span>{{prodPrice}}</span>
                    <div style="width:100%; height:1px; background:#515a6e;"/>
                    <div class="input">
                        <span>尺寸</span>
                        <ul>
                            <li v-for="item in sizeList">
                                <Button>{{item.name}}</Button>
                            </li>
                        </ul>
                    </div>
                    <div style="width:100%; height:1px; background:#515a6e;"/>
                    <div class="input">
                        <span>数量</span>
                        <div>
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
            sizeList: [
                {name: 'XS'},
                {name: 'S'},
                {name: 'M'},
                {name: 'L'},
                {name: 'XL'},
            ],
            num: 1,
        }
    },
    computed:{
        totalPrice: function(){
            var total = '';
            var totalFee = this.$store.state.prod.price * this.num;
            
            return total = '¥'+ totalFee + '.00';

        }　
    },
    created(){
        this.prodName = this.$store.state.prod.name;
        this.prodPrice = this.formatPrice();
    },
    methods: {
        formatPrice(){
            var price = '';
            price = this.$store.state.prod.price;
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
        width: 30rem;
        height: 30rem;
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
    }
    .input {
        width: 100%;
        margin: 1rem 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
            text-align: left;
            min-width: 10rem;
            min-height: 2rem;
        }
        ul {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li {
                margin: 0.5rem 0.5rem;
            }
        }
        div {
            display: flex;
            justify-content: space-around;
            .ivu-input {
                height: 100%;
                text-align: center;
                font-size:1rem;
            }
        }
    }
    .right {
        width: 100%;
        margin: 1rem 0 0 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .addCar {
        margin: 1rem 0;
        height: 3.5rem;
        font-size: 1.2rem;
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
</style>

