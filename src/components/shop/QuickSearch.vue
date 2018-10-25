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
            btnList:[
                {name:'主场球衣'},
                {name:'第三球衣'},
                {name:'守门员球衣'},
            ]
        }
    }
}
</script>
<style lang="scss">
.QuickSearch{
    height: 18rem;
    width: auto;
    background-color: #aaa;
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