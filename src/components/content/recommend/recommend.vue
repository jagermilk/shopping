<template>
    <div class="recommend">
        <Recommenditem v-for="cate in goods.list" :goodItem="cate"></Recommenditem>
    </div>
</template>

<script>

import Recommenditem from './recommenditem.vue';
    export default {
    props:{
        goods:{
            type:Object,
            defalut(){
                return {}
            }
        },
    },
    components: {  Recommenditem }
}
</script>

<style lang="less" scoped>
    .recommend{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        padding-top: 10px;
        border-top: 1px solid rgb(230, 230, 230);

    }
</style>