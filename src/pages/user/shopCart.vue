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
        <CheckboxGroup v-model="selectBox" @on-change="checkSelectBox">
        <Row v-show="prodList.length !=0" class="prods" type="flex" align="middle" v-for="(item, index) in prodList">
            <Col span="2">
                <Checkbox :label="item.id">{{""}}</Checkbox>
            </Col>    
            <Col span="2">
                <img :src="item.imgUrl"/>
            </Col>
            <Col span="5">
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
                <span style="font-weight:bold;color:rgb(212, 0, 0)">¥{{item.totalFee}}.00</span>
            </Col>
            <Col span="3">
                <span>操作</span>
            </Col>
        </Row>
        </CheckboxGroup>
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
                <a href="#" @click="deleteCar">删除</a>
            </Col>
            <Col>
                <a href="#" @click="clearCar">清空</a>
            </Col>
            <Col span="3" offset="11">
                <span>已选商品：{{selectBox.length}} 件</span>
            </Col>
            <Col span="2">
                <span style="font-size:1.2rem;font-weight:bold;color:rgb(212, 0, 0)">合计：¥{{countFee}}</span>
            </Col>
            <Col span="2">
                <Button :class="{countBtn:!disabled}" :disabled="disabled" @click="payMoney">结算</Button>
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
            countFee: 0,
            selectBox: [],
            prodList:[]
        }
    },
    inject:['reload'],
    computed:{
        disabled(){
            var isUse = true;
            if(this.selectBox.length>0){
                return isUse = false;
            }
            return isUse;
        }
    },
    created(){
        var shopCarObj = localStorage.getItem("shopCar");

        if(shopCarObj != null){
            this.prodList = JSON.parse(shopCarObj);
        };
    },
    methods:{
        //清空购物车
        clearCar(){
            if(confirm("确定清空购物车吗？")){
                localStorage.removeItem("shopCar");
                this.reload();
            }
        },
        //删除某产品
        deleteCar(){
            for(var i=0; i<this.prodList.length; i++){
                if(this.selectBox.indexOf(this.prodList[i].id)!=-1){
                    this.prodList.splice(i,1);
                    i=0;
                }
            }
            localStorage.setItem("shopCar", JSON.stringify(this.prodList));
            this.reload();
        },
        //结算
        payMoney(){
            alert("付款");
        },
        //全选
        handleCheckAll(){
            if (this.indeterminate) {
                    this.checkAll = false;
            } else {
                    this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if(this.checkAll){
                for(var i=0; i<this.prodList.length; i++){
                    this.selectBox.push(this.prodList[i].id);
                    this.countFee += this.prodList[i].totalFee;
                };
            }
            else{
                this.countFee = 0;
                this.selectBox = [];
            }
        },
        //选中
        checkSelectBox(data){
            if(this.selectBox.length == this.prodList.length){
                this.indeterminate = false;
                this.checkAll = true;
                this.computeTotalFee(data);
            }
            else if(data.length > 0){
                this.indeterminate = true;
                this.checkAll = false;
                this.computeTotalFee(data);
            }
            else{
                this.indeterminate = false;
                this.checkAll = false;
                this.countFee = 0;
            }
        },
        //合计
        computeTotalFee(data){
            this.countFee = 0;
            for(var i=0; i<this.prodList.length; i++){
                if(data.indexOf(this.prodList[i].id)!=-1){
                     this.countFee += this.prodList[i].totalFee;
                }
            }
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
        height: 6rem;
        margin:1rem 0;
        img {
            height: 5rem;
            width: 5rem;
        }
    }

    .count {
        width: 100%;
        height: 3rem;
        margin: 1rem 0;
        background-color: rgb(219, 219, 219);
        .countBtn {
            background-color: $MAIN_COLOR !important;
            color: $TEXT_COLOR_WHITE !important;
        }
        .ivu-btn {
            width:100%;
            height: 3rem;
            font-size: 1.2rem;
            color: $TEXT_COLOR_BLACK;
            border: none;
            background-color: rgb(175, 175, 175);
            &:focus {
                box-shadow: none;
            }
        }
    }
}

</style>