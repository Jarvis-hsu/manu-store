<template>
    <div>
        <Row>
            <Col class="navbar">
                <Menu mode="horizontal" theme="dark" @on-select="test">
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
                    <Submenu name="fashion">
                        <template slot="title">
                            时尚
                        </template>
                        <MenuItem v-for="(item, index) in fashionList" :name="'fashion_'+index">{{item.name}}</MenuItem>
                    </Submenu>
                    <Submenu name="equip">
                        <template slot="title">
                            装备
                        </template>
                        <MenuItem v-for="(item, index) in equipList" :name="'equip_'+index">{{item.name}}</MenuItem>
                    </Submenu>
                    <Submenu name="family">
                        <template slot="title">
                            家居用品
                        </template>
                        <MenuItem v-for="(item, index) in familyList" :name="'family_'+index">{{item.name}}</MenuItem>
                    </Submenu>
                    <Submenu name="memory">
                        <template slot="title">
                            纪念品
                        </template>
                        <MenuItem v-for="(item, index) in memoryList" :name="'memory_'+index">{{item.name}}</MenuItem>
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
    data () {
        return {
            jerseyList:[],
            trainingList:[],
            fashionList:[],
            equipList:[],
            familyList:[],
            memoryList:[],
            discountList:[],
        }
    },
    created(){
        this.getMenuData();
    },
    methods: {
        test(name){
            this.$router.push('/shop');
        },
        getMenuData(){
            var _this = this;
            this.$http({
                method: 'get',
                url: '../../../static/home/menu.json',
                transformResponse: [function(data){
                    //处理数据
                    _this.setMenu(JSON.parse(data));
                    // console.log(JSON.parse(data));
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
                    if(menuData[i].type=="fashion")
                    {
                        this.fashionList = menuData[i].list;
                    }
                    if(menuData[i].type=="equip")
                    {
                        this.equipList = menuData[i].list;
                    }
                    if(menuData[i].type=="family")
                    {
                        this.familyList = menuData[i].list;
                    }
                    if(menuData[i].type=="memory")
                    {
                        this.memoryList = menuData[i].list;
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
    .ivu-menu{
        display: flex;
        justify-content: center;
        li {
            padding: 0 3rem;
        }
    }
</style>
