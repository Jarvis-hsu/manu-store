<template>
    <div class="paneMenu">
        <ul class="menuList">
            <li v-for="(item,index) in menuList" class="pane">
                <div class="menus"  @mouseenter="showOrHide(index)">
                    <img :src="item.imgUrl"/>
                    <Button :class="{focus:item.isShow}" size="large" @click="goToBuy(item.menuType)">{{item.name}}</Button>
                </div>
                <div :id="index" class="cover" v-show="item.isShow" @mouseleave="showOrHide(index)" @click="goToBuy(item.menuType)">
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
                {isShow: false, name: '18/19赛季客场球衣', imgUrl: '../../../static/img/fff.jpg', menuType: 'jersey_1'},
                {isShow: false, name: '18/19赛季曼联主场' , imgUrl: '../../../static/img/ggg.jpg', menuType: 'jersey_0'},
                {isShow: false, name: '18/19训练系列' , imgUrl: '../../../static/img/bbb.jpg', menuType: 'training_0'},
                {isShow: false, name: '运动装备' , imgUrl: '../../../static/img/eee.jpg', menuType: 'equip_0'},
                // {isShow: false, name: '曼联赛前上衣' , imgUrl: '../../../static/img/fff.jpg'},
                // {isShow: false, name: '1968年欧洲杯冠军系列' , imgUrl: '../../../static/img/ggg.jpg'},
            ],
            menuTypeList: []
        }
    },
    mounted(){
        this.menuTypeList = JSON.parse(sessionStorage.getItem("menuTypeList"));
    },
    methods: {
        //显示隐藏
        showOrHide(curId){
            this.menuList[curId].isShow = !this.menuList[curId].isShow;
        },
        goToBuy(menuType){
            var childType = menuType;
            var parentType = menuType.split("_")[0];
            var navTypeObj = {
                    "childType": childType,
                    "parentType": parentType
            }
            var list = this.getMenuChildList(parentType);

            sessionStorage.setItem("navType", JSON.stringify(navTypeObj));
            this.$store.commit("setNavType", navTypeObj);

            sessionStorage.setItem("navList", JSON.stringify(list));
            this.$store.commit("setNavList", list);

            //跳转
            this.$router.push('/shop/showProds');
        },

        getMenuChildList(parentType){
            var childList = [];
            for(var i=0; i<this.menuTypeList.length;i++){
                if(this.menuTypeList[i].type==parentType){
                    childList = this.menuTypeList[i].list;
                    break;
                }
            }

            return childList;
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