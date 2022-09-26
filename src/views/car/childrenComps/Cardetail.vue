<template>
    <div class="cardetail">
        <Cardetailitem v-for="cate in carlist"
        :key="cate"
        :caritems="cate"></Cardetailitem>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
import Cardetailitem from './Cardetailitem.vue';
    export default {
    computed: {
        ...mapGetters(["carlist"])
    },
    
    components: { Cardetailitem }
}
</script>

<style lang="less" scoped>
    .cardetail{
        margin-top: 49px;
    }
</style>