<template>
    <div class="padding-0-44 shopCart" type="flex" align="middle">
        <Row class="cartTitle">
            <Col span="2">
                <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">
                    全选
                </Checkbox>
            </Col>    
            <Col span="10">
                <span>商品信息</span>
            </Col>
            <Col span="3">
                <span>单价</span>
            </Col>
            <Col span="3">
                <span>数量</span>
            </Col>
            <Col span="3">
                <span>金额</span>
            </Col>
            <Col span="3">
                <span>操作</span>
            </Col>
        </Row>
        <Row v-show="prodList.length !=0" class="prods" type="flex" align="middle" v-for="(item, index) in prodList">
            <Col span="2">
                <Checkbox :label="item.id"></Checkbox>
            </Col>    
            <Col span="7">
                <span>{{item.name}}</span>
            </Col>
            <Col span="3">
                <span>尺码分类：{{item.size}}</span>
            </Col>
            <Col span="3">
                <span style="font-weight:bold;">{{item.price}}</span>
            </Col>
            <Col span="3">
                <span>{{item.num}}</span>
            </Col>
            <Col span="3">
                <span style="font-weight:bold;color:rgb(212, 0, 0)">{{item.totalFee}}</span>
            </Col>
            <Col span="3">
                <span>操作</span>
            </Col>
        </Row>
        <Row v-show="prodList.length == 0" type="flex" align="middle" justify="center">
            <Col>
                <h3>暂无可选商品</h3>
            </Col>    
        </Row>   
        <Row class="count" type="flex" align="middle" justify="space-between">
            <Col span="2">
                <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">
                    全选
                </Checkbox>   
            </Col>
            <Col span="1">
                <span>删除</span>
            </Col>
            <Col>
                <a href="#" @click="clearCar">清空</a>
            </Col>
            <Col span="3" offset="11">
                <span>已选商品：  件</span>
            </Col>
            <Col span="3">
                <span style="font-size:1.3rem;font-weight:bold;color:rgb(212, 0, 0)">合计：¥{{countFee}}</span>
            </Col>
            <Col span="1" offset="1" justify="space-between">
                <div class="countBtn" @click="payMoney">
                    <a href="#">结算</a>
                </div>
            </Col>
        </Row>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            indeterminate: true,
            checkAll: false,
            prodList:[]
        }
    },
    inject:['reload'],
    computed:{
        countFee(){
            var countFee = 0;
            for(var i=0; i<this.prodList.length; i++){
                countFee += this.prodList[i].totalFee;
            }
            return countFee;
        }  
    },
    created(){
        var shopCarObj = localStorage.getItem("shopCar");

        if(shopCarObj != null){
            this.prodList = JSON.parse(shopCarObj);
        };
    },
    methods:{
        clearCar(){
            if(confirm("确定清空购物车吗？")){
                localStorage.removeItem("shopCar");
                this.reload();
            }
        },
        payMoney(){
            alert("付款");
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/css/public/var.scss';

.shopCart {
    height: auto;
    font-size: 0.8rem;
    .cartTitle{
        width: 100%;
        height: 1.8rem;
        margin: 1rem 0;
        border-bottom: 1px solid rgb(219, 219, 219);
    }
    .prods {
        width: 100%;
        height: 5rem;
        margin:1rem 0;
    }

    .count {
        width: 100%;
        height: 3rem;
        margin: 1rem 0;
        background-color: rgb(219, 219, 219);
        .countBtn {
            height: 3rem;
            width: 5rem;
            background-color: $MAIN_COLOR;
            display: flex;
            justify-content: center;
            align-items: center;
            a { 
                font-size: 1.2rem;   
                text-decoration: none;
                color: $COLOR_FFF;
            }
            &:hover {
                background-color: $MAIN_SELECT_COLOR;
                cursor: pointer;
            }
        }
    }
}

</style>