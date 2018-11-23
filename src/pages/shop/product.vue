<template>
    <div class="product">
        <Row>
            <Col span="16">
                <img src="../../../static/img/clo-1.jpg">
            </Col>
            <Col span="8">
                <div>
                    <h2>{{prodName}}</h2>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data (){
        return {
            prodName: ''
        }
    },
    created(){
        this.prodName = this.$store.state.prod.name;
    }
}
</script>
<style lang="scss">
.product {
    img {
        width: 30rem;
        height: 30rem;
    }
}
</style>

