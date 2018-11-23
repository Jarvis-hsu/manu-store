<template>
    <div>
        <Row>
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
                <product-list v-on:getTotalProd="getTotalNum" ref="prodsComponent"></product-list>
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
import ProductList from '../../components/shop/ProductList'

export default {
    components: {
        ProductList:ProductList
    },
    data (){
        return {
            parentType: '',
            childType: '',
            totalNum: 0,
            classList: []
        }
    },
    created(){
        this.getNavType();
        this.classList = this.$store.state.navList;
        
    },
    methods: {
        getNavType(){
            var parent = this.$store.state.navType.parentType;
            var child = this.$store.state.navType.childType;
            this.parentType = parent?parent : '';
            this.childType = child?child : '';
        },
        getTotalNum(data){
            this.totalNum = data;
        },
        searchProd(name){
            this.$store.commit("setNavType", {
                "parentType": this.parentType,
                "childType": name
            })
            //父组件调用子组件的方法
            this.$refs.prodsComponent.getProdsData();
        }
    }
}
</script>
<style lang="scss">

</style>

