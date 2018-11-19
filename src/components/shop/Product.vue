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
                    name: '曼联主场球衣 2018-19',
                    type: 'home',
                    price: '¥299',
                    imgUrl: '../../static/img/clo-4.jpg'
                },
                {
                    name: '曼联主场球衣 2018-19',
                    type: 'away',
                    price: '¥399',
                    imgUrl: '../../static/img/clo-1.jpg'
                },
                {
                    name: '曼联主场球衣 2018-19',
                    type: 'home',
                    price: '¥199',
                    imgUrl: '../../static/img/clo-2.jpg'
                },
                {
                    name: '曼联主场球衣 2018-19',
                    type: 'away',
                    price: '¥299',
                    imgUrl: '../../static/img/clo-3.jpg'
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
