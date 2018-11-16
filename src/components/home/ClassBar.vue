<template>
    <div>
        <Tabs>
            <TabPane label="主场球衣">
                <Carousel v-model="value1" loop class="BarCarousel">
                        <CarouselItem>
                            <div class="classCarousel">
                                <img src="../../../static/img/fff.jpg"/>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="classCarousel">
                                <img src="../../../static/img/ggg.jpg"/>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="classCarousel">
                                <img src="../../../static/img/ccc.jpg"/>
                            </div>
                        </CarouselItem>
                    </Carousel>
            </TabPane>
            <TabPane label="品牌商店">
                <div>
                    <h1>品牌商店</h1>
                </div>
            </TabPane>
        </Tabs>
    </div>
    
</template>
<script>
export default {
    name: 'ClassBar',
    data (){
        return {
            value1: 0
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/css/public/var.scss';

.BarCarousel {
    margin: 0;
    padding: 0;
    height: 15rem;
    width: auto;
    .classCarousel{
        margin: 0;
        padding: 0;
        height: 30rem;
        width: auto;
        background-color: rgba(255, 255, 255, 0.856);
        img {
            height: 100%;
            width:100%;
        }
    }
}

.ivu-tabs-nav-scroll {
    display: inline-flex;
    justify-content: center;
    color: $MAIN_COLOR;
    .ivu-tabs-ink-bar {
        background-color: $MAIN_COLOR;
    }
    .ivu-tabs-tab {
        color: $COLOR_BLACK;
        background-color: $COLOR_BACKGROUND_GRAY;
        &:hover {
            color:$COLOR_BLACK!important;
        }
    }
    .ivu-tabs-tab-active {
        color: $COLOR_FFF;
        background-color: $MAIN_COLOR;
        &:hover {
            color:$COLOR_FFF!important;
        }
    }
}


</style>
