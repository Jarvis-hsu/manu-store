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
                    <BreadcrumbItem>{{navType}}</BreadcrumbItem>
                </Breadcrumb>
            </Col>
        </Row>
        <Row class="padding-0-44">
            <Col>
                <Sider>
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                类别
                            </template>
                            <MenuItem v-for="(item, index) in classList" :name="'1-'+index">{{item.name}}</MenuItem>
                            <!-- <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem> -->
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
        </Row>
        <Row class="padding-0-44 page" type="flex" justify="center">
            <Col span="12" offset="4">
                <Page :total="50" show-elevator />
            </Col>
        </Row>
    </div>
</template>
<script>
import QuickSearch from '../../components/shop/QuickSearch'

export default {
    components: {
        QuickSearch: QuickSearch
    },
    data (){
        return {
            navType: '',
            navName: {
                "jersey":"球衣",
                "training":"训练系列",
                "fashion": "时尚", 
                "equip": "装备",
                "family": "家居用品",
                "memory": "纪念品",
                "discount": "折扣区"
            },
            classList: []
        }
    },
    mounted(){
        this.navType = this.getNavType();
        this.classList = this.$store.state.navList;
        
    },
    methods: {
        getNavType(){
            var type = this.$store.state.navType;
            return this.navName[type];
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
    }
}

</style>