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
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
            </Col>
        </Row>
        <Row class="padding-0-44">
            <Col>
                <Sider>
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1','2','3']">
                        <Submenu name="1">
                            <template slot="title">
                                类别
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
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

        }
    }
}
</script>
<style lang="scss">
.shop {
    min-height: 50rem;
    .breadCrumb {
        height: 4rem;
    }
    .page {
        margin: 3rem 0;
    }
}

</style>