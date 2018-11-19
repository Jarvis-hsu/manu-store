<template>
    <div class="QuickSearch">
        <Row type="flex" justify="center">
            <Col span="2" v-for="(item, index) in btnList">
                <Button size="large" >{{item.name}}</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'QuickSearch',
    data (){
        return {
            btnList:[]
        }
    },
    mounted(){
        this.getMenuData();
    },
    methods: {
        getMenuData(){
            var _this = this;
            this.$http({
                method: 'get',
                url: '../../../static/data/home/menu.json',
                transformResponse: [function(data){
                    //处理数据
                    _this.setMenu(JSON.parse(data));
                }]
            })
        },
        setMenu(menuData){
            var navType = this.$store.state.navType.parentType;
            if(menuData != undefined || menuData != null){
                for(var i=0; i<menuData.length; i++){
                    if(navType== menuData[i].type)
                    {
                        this.btnList = menuData[i].list;
                        break;
                    }
                }
            }
            
        }
    }
}
</script>
<style lang="scss">
.QuickSearch{
    height: 18rem;
    width: auto;
    background: url("../../../static/img/ddd.jpg") no-repeat;
    background-size: 100% 100%;
    .ivu-row-flex {
        position: relative;
        top: 80%;
        button {
            color: $TEXT_COLOR_WHITE;
            background-color: $MAIN_COLOR;
            position: relative;
            z-index: 1;
            border-radius: unset;
            &:hover {
            background-color: $COLOR_FFF;
            color: $MAIN_COLOR ;
            border-color: $MAIN_COLOR;
            }
        }
    }
}
</style>