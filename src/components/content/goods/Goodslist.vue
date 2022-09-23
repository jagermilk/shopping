<template>
    <div class="goodslist">
        <GoodListItem v-for="item in goods.list" :goodItem="item"></GoodListItem>
    </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';
    export default {
    props:{
        goods:{
            type:Array,
            defalut(){
                return []
            }
        }
    },
    components: { GoodListItem }
}
</script>

<style lang="less" scoped>
    .goodslist{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;

    }
</style>