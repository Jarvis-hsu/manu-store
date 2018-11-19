<template>
    <div class="shop">
        <Row>
            <Col>
                <!-- 快速搜索 -->
                <quick-search></quick-search>
            </Col>
        </Row>
        <Row type="flex" align="middle" class="padding-0-44 breadCrumb">
            <Col span="8" offset="1">
                <Breadcrumb style="text-align:left;">
                    <BreadcrumbItem to="/">主页</BreadcrumbItem>
                    <BreadcrumbItem to="/shop">商店</BreadcrumbItem>
                    <BreadcrumbItem>{{navName[parentType]}}</BreadcrumbItem>
                </Breadcrumb>
            </Col>
        </Row>
        <Row class="padding-0-44">
            <Col span="4">
                <Sider>
                    <Menu theme="light" :active-name="childType" width="auto" :open-names="[parentType]" @on-select="searchProd">
                        <Submenu :name="parentType">
                            <template slot="title">
                                类别
                            </template>
                            <MenuItem v-for="(item, index) in classList" :name="parentType+'_'+index">{{item.name}}</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                球员
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                价格
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
            </Col>
            <Col span="20">
                <product v-on:getTotalProd="getTotalNum"></product>
            </Col>
        </Row>
        <Row class="padding-0-44 page" type="flex" justify="center">
            <Col span="12">
                <Page :total="totalNum" show-elevator show-total/>
            </Col>
        </Row>
    </div>
</template>
<script>
import QuickSearch from '../../components/shop/QuickSearch';
import Product from '../../components/shop/Product';

export default {
    components: {
        QuickSearch: QuickSearch,
        Product : Product
    },
    data (){
        return {
            parentType: '',
            childType: '',
            totalNum: 0,
            navName: {
                "jersey":"球衣",
                "training":"训练系列",
                "equip": "装备",
                "discount": "折扣区"
            },
            classList: []
        }
    },
    created(){
        this.getNavType();
        this.classList = this.$store.state.navList;
        
    },
    methods: {
        getNavType(){
            this.parentType = this.$store.state.navType.parentType;
            this.childType = this.$store.state.navType.childType;
            console.log("parentType:"+this.parentType);
            console.log("childType:"+this.childType);
        },
        getTotalNum(data){
            this.totalNum = data;
        },
        searchProd(name){
            console.log(name);
        }
    }
}
</script>
<style lang="scss">
@import '../../assets/css/public/var.scss';

.shop {
    min-height: 50rem;
    .breadCrumb {
        height: 4rem;
    }
    .page {
        margin: 3rem 0;
    }
    .ivu-menu {
        .ivu-menu-item {
            &:hover {
                background: $MAIN_COLOR !important;
                color: $COLOR_FFF;
            }
        }
        .ivu-menu-item-selected {
            color: $COLOR_FFF !important;
            background: $MAIN_SELECT_COLOR !important;
        }
        .ivu-menu-submenu-title:hover {
            color: $MAIN_COLOR;
        }
        .ivu-menu-item-active:not(.ivu-menu-submenu):after{
            background: $MAIN_COLOR;
        }
    }
}

</style>