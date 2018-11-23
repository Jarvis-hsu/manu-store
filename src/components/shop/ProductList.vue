<template>
    <div class="product">
        <ul class="prodList">
            <li v-for="(item, index) in productList">
                <div class="prods" @click="goToDetail(item.id, item.name)">
                    <img class="prodImg" :src="item.imgUrl" />
                    <span>{{item.name}}</span>
                    <span>{{item.price}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'ProductList',
    data (){
        return {
            productList:[]
        }
    },
    mounted(){
        this.$emit("getTotalProd", this.productList.length);
        this.getProdsData();
    },
    methods: {
        getProdsData(){
            var _this = this;
            this.$http({
                method: 'get',
                url: '../../../static/data/shop/product.json',
                transformResponse: [function(data){
                    //处理数据
                    _this.setProds(JSON.parse(data));
                }]
            })
        },
        setProds(prodData){
            var childType = this.$store.state.navType.childType;
            this.productList = [];
            if(prodData != undefined || prodData != null){
                for(var i=0; i<prodData.length; i++){
                    if(childType== prodData[i].type)
                    {
                        this.productList.push(prodData[i]);
                    }
                }
                this.$emit("getTotalProd", this.productList.length);
            }
        },
        goToDetail(prodId, prodName){
            this.$store.commit("setProd", {
                "id":prodId,
                "name": prodName
            })
            this.$router.push("/shop/product");
        }
    }
}
</script>
<style lang="scss">
.product{
    display: flex;
    align-items: center;
    justify-content: center;
    .prodList {
        width: 90%;
        height: 90%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .prods {
            margin: 2rem;
            padding: 0;
            width: 18rem;
            height: 23rem;
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            .prodImg{
                width:100%;
                height: 80%;
            }
            span{
                font-weight: bold;
                margin: 0.5rem;
            }
            span:last-child {
                font-size: 1rem;
            }
            &:hover {
                cursor: pointer;
            }
    
        }
    }
}



</style>
