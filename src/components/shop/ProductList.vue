<template>
    <div class="product">
        <ul class="prodList">
            <li v-for="(item, index) in productList">
                <div class="prods" @click="goToDetail(item)">
                    <img class="prodImg" :src="item.imgUrl" />
                    <span>{{item.name}}</span>
                    <span>{{formatPrice(item.price)}}</span>
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
            var childType = JSON.parse(sessionStorage.getItem("navType")).childType;
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
        goToDetail(prodInfo){
            var prodObj = {
                "id":prodInfo.id,
                "name": prodInfo.name,
                "price": prodInfo.price,
                "url": prodInfo.imgUrl
            }

            sessionStorage.setItem("prod", JSON.stringify(prodObj));
            this.$store.commit("setProd", prodObj);

            this.$router.push("/shop/product");
        },
        formatPrice(price){
            var prodPrice = '';
            if(price != 0 || price != null){
                prodPrice = '¥'+ price + '.00';
            }
            return prodPrice
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
                margin: 0.5rem 0;
                font-weight: bold;
                font-size: 0.9rem;
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
