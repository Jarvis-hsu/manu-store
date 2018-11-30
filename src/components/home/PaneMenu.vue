<template>
    <div class="paneMenu">
        <ul class="menuList">
            <li v-for="(item,index) in menuList" class="pane">
                <div class="menus"  @mouseenter="showOrHide(index)">
                    <img :src="item.imgUrl"/>
                    <Button :class="{focus:item.isShow}" size="large" @click="goToBuy">{{item.name}}</Button>
                </div>
                <div :id="index" class="cover" v-show="item.isShow" @mouseleave="showOrHide(index)" @click="goToBuy">
                    <span>立刻选购</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'PaneMenu',
    data () {
        return {
            menuList: [
                {isShow: false, name: '18/19赛季曼联第三球衣', imgUrl: '../../../static/img/ggg.jpg'},
                {isShow: false, name: 'NEW ERA' , imgUrl: '../../../static/img/fff.jpg'},
                {isShow: false, name: '18/19训练系列' , imgUrl: '../../../static/img/bbb.jpg'},
                // {isShow: false, name: '曼联赛前上衣' , imgUrl: '../../../static/img/fff.jpg'},
                {isShow: false, name: 'NEW ERA帽子' , imgUrl: '../../../static/img/eee.jpg'},
                // {isShow: false, name: '1968年欧洲杯冠军系列' , imgUrl: '../../../static/img/ggg.jpg'},
            ]
        }
    },
    methods: {
        //显示隐藏
        showOrHide(curId){
            this.menuList[curId].isShow = !this.menuList[curId].isShow;
        },
        goToBuy(){
            this.$router.push('/shop');
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/css/public/var.scss';

.paneMenu {
    margin: 0;
    padding: 0;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .menuList {
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .pane {
            margin: 1rem;
            float: left;
            position: relative;
            display: inline-flex;
            justify-content: center;
            .menus {
                height: 25rem;
                width: 30rem;
                img{
                    width: 100%;
                    height: 100%;
                }
                button {
                    color: $TEXT_COLOR_WHITE;
                    background-color: $MAIN_COLOR;
                    position: relative;
                    top: -20%;
                    z-index: 999;
                    border-radius: unset;
                    &:hover {
                        background-color: $COLOR_FFF;
                        color: $MAIN_COLOR ;
                        border-color: $MAIN_COLOR;
                    }
                }
                .focus {
                    background-color: $COLOR_FFF;
                    color: $MAIN_COLOR ;
                    border-color: $MAIN_COLOR;
                }
            }
            .cover {
                height: 25rem;
                width: 30rem;
                background-color: rgba(0,0,0, 0.5);
                position: absolute;
                top: 0;
                z-index: 1;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                span {
                    font-size: 2rem;
                    color: $TEXT_COLOR_WHITE;
                }
                &:hover {
                    cursor: pointer;
                }
            }
        }
        
    }
}


</style>