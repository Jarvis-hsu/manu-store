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
                    <BreadcrumbItem>商店</BreadcrumbItem>
                    <BreadcrumbItem to="/shop/showProds">{{navName[parentType]}}</BreadcrumbItem>
                    <BreadcrumbItem v-if="prodName !=''">{{prodName}}</BreadcrumbItem>
                </Breadcrumb>
            </Col>
        </Row>
        <Row class="padding-0-44">
            <router-view v-if="isRouterAlive"></router-view>
        </Row>
    </div>
</template>
<script>
import QuickSearch from '../../components/shop/QuickSearch';

export default {
    components: {
        QuickSearch: QuickSearch
    },
    data (){
        return {
            isRouterAlive: true,
            parentType: '',
            prodName: '',
            navName: {
                "jersey":"球衣",
                "training":"训练系列",
                "equip": "装备",
                "discount": "折扣区"
            }
        }
    },
    created(){
        this.getNavType();

        if(sessionStorage.getItem("prod")!= null){
            this.prodName = JSON.parse(sessionStorage.getItem("prod")).name;
        };      
    },
    methods: {
        getNavType(){
            var parent = JSON.parse(sessionStorage.getItem("navType")).parentType;
            this.parentType = parent?parent : '';
        },
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