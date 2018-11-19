<template>
    <div>
        <Row>
            <Col>
            <Carousel autoplay v-model="value2" loop class="homeCarousel">
                <CarouselItem>
                    <div class="carousel">
                        <img src="../../static/img/aaa.jpg"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carousel">
                        <img src="../../static/img/bbb.jpg"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carousel">
                        <img src="../../static/img/ccc.jpg"/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="carousel">
                        <img src="../../static/img/ddd.jpg"/>
                    </div>
                </CarouselItem>
            </Carousel>
            </Col>
        </Row>
        <Row class="padding-0-44">
            <Col>
                <class-bar></class-bar>
            </Col>
        </Row>
        <Row class="padding-0-44 padding-2-0">
            <Col>
                <div>
                    <img class="menuImage" src="../../static/img/bbb.jpg"/>
                </div>
            </Col>
        </Row>
        <Row class="padding-0-44 padding-2-0">
            <Col>
                <div>
                    <img class="menuImage" src="../../static/img/ccc.jpg"/>
                </div>
            </Col>
        </Row>
        <Row class="padding-0-44">
            <Col>
                <pane-menu></pane-menu>
            </Col>
        </Row>
        <Row class="padding-0-44 padding-2-0">
            <Col>
                <div>
                    <img class="menuImage" src="../../static/img/ddd.jpg"/>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import ClassBar from '../components/home/ClassBar';
import PaneMenu from '../components/home/PaneMenu'

export default {
    name: 'index',
    components: {
        ClassBar: ClassBar,
        PaneMenu: PaneMenu
    },
    data () {
        return {
            value2: 0
        }
    },
    mounted(){

    },
    methods: {
       
    }
}
</script>
<style lang="scss" scoped>
.homeCarousel {
    margin: 0;
    padding: 0;
    height: 20rem;
    width: auto;
    background-color: rgba(255, 255, 255, 0.856);
    img {
        height: 20rem;
        width:100%;
    }
}

.menuImage {
        margin: 0;
        padding: 0;
        width: 30rem;
        height: 20rem;
        background-color: #aaa;
    }
</style>