<template>
    <div>
        <Row>
            <Col class="navbar">
                <Menu mode="horizontal" theme="dark" @on-select="shopInit">
                    <Submenu name="jersey">
                        <template slot="title">
                            球衣
                        </template>
                        <MenuItem v-for="(item, index) in jerseyList" :name="'jersey_'+index">{{item.name}}</MenuItem>
                    </Submenu>
                    <Submenu name="training">
                        <template slot="title">
                            训练系列
                        </template>
                        <MenuItem v-for="(item, index) in trainingList" :name="'training_'+index">{{item.name}}</MenuItem>
                    </Submenu>
                    <Submenu name="equip">
                        <template slot="title">
                            装备
                        </template>
                        <MenuItem v-for="(item, index) in equipList" :name="'equip_'+index">{{item.name}}</MenuItem>
                    </Submenu>
                    <Submenu name="discount">
                        <template slot="title">
                            折旧区
                        </template>
                        <MenuItem v-for="(item, index) in discountList" :name="'discount_'+index">{{item.name}}</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    inject: ['reload'],
    data () {
        return {
            jerseyList:[],
            trainingList:[],
            equipList:[],
            discountList:[],
        }
    },
    created(){
        this.getMenuData();
        this.shopInit("");
    },
    methods: {
        shopInit(name){
            var list = [];
            var childType = "";
            var parentType = "";

            if(name != ""){
                childType = name;
                parentType = name.split("_")[0];

                if(parentType == "jersey") list = this.jerseyList;
                if(parentType == "training") list = this.trainingList;
                if(parentType == "equip") list = this.equipList;
                if(parentType == "discount") list = this.discountList;
                var navTypeObj = {
                    "childType": childType,
                    "parentType": parentType
                }
                sessionStorage.setItem("navType", JSON.stringify(navTypeObj));
                this.$store.commit("setNavType", navTypeObj);

                sessionStorage.setItem("navList", JSON.stringify(list));

                sessionStorage.removeItem("prod");//产品清空
                this.$store.commit("setProd", null); 

                this.$router.push('/shop/showProds');

            }else{
                childType = JSON.parse(sessionStorage.getItem("navType")).childType;
                parentType = JSON.parse(sessionStorage.getItem("navType")).parentType;
                list = JSON.parse(sessionStorage.getItem("navList"));
            }
            
            this.$store.commit("setNavList", list);
            this.reload();
        },
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
            if(menuData != undefined || menuData != null){
                for(var i=0; i<menuData.length; i++){
                    if(menuData[i].type=="jersey")
                    {
                        this.jerseyList = menuData[i].list;
                    }
                    if(menuData[i].type=="training")
                    {
                        this.trainingList = menuData[i].list;
                    }
                    if(menuData[i].type=="equip")
                    {
                        this.equipList = menuData[i].list;
                    }
                    if(menuData[i].type=="discount")
                    {
                        this.discountList = menuData[i].list;
                    }
                }
            }   
        }
    }
}
</script>                   
<style scoped lang="scss">
@import '../../assets/css/public/var.scss';

.ivu-menu{
    display: flex;
    justify-content: center;
    li {
        padding: 0 3rem;
    }
    .ivu-menu-item {
        &:hover {
            background: $MAIN_COLOR !important;
            color: $COLOR_FFF;
        }
    }
    .ivu-menu-item-selected {
        color: $COLOR_FFF !important;
        background: $MAIN_SELECT_COLOR;
    }
}
</style>
