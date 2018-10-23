<template>
    <div>
        <Row>
            <Col>
                <Carousel autoplay v-model="value2" loop>
                    <CarouselItem>
                        <div class="carousel">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel">3</div>
                    </CarouselItem>
                     <CarouselItem>
                        <div class="carousel">4</div>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>

    </div>
</template>
<script>
export default {
    data (){
        return {
            value2: 0
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
    .carousel{
        margin: 0;
        padding: 0;
        height: 400px;
        width: auto;
        background-color: rgba(255, 255, 255, 0.856);
    }
</style>