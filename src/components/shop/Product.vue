<template>
    <div class="product">
        <ul class="prodList">
            <li v-for="(item, index) in productList">
                <div class="prods">
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
    name: 'Product',
    data (){
        return {
            productList:[
                {
                    name: 'aaa',
                    type: '',
                    price: 0,
                    imgUrl: ''
                },
                {
                    name: 'bbb',
                    type: '',
                    price: 1,
                    imgUrl: ''
                },
                {
                    name: 'ccc',
                    type: '',
                    price: 2,
                    imgUrl: ''
                },
                {
                    name: 'ddd',
                    type: '',
                    price: 3,
                    imgUrl: ''
                }
            ]
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
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .prods {
            margin: 2rem;
            padding: 0;
            width: 18rem;
            height: 18rem;
            background: gray;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .prodImg{
                width:100%;
                height: 50%;
            }
    
        }
    }
}



</style>
