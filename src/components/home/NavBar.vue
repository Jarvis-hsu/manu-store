<template>
    <div>
        <Row>
            <Col class="navbar">
                <Menu mode="horizontal" theme="dark">
                    <MenuItem name="1">球衣</MenuItem>
                    <MenuItem name="2">训练系列</MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            时尚
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">装备</MenuItem>
                    <MenuItem name="5">家居用品</MenuItem>
                    <MenuItem name="6">纪念品</MenuItem>
                    <Submenu name="7">
                        <template slot="title">
                            折旧区
                        </template>
                        <MenuItem name="7-1">球衣</MenuItem>
                        <MenuItem name="7-2">时尚</MenuItem>
                        <MenuItem name="7-3">家居用品</MenuItem>
                        <MenuItem name="7-4">纪念品</MenuItem>
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
