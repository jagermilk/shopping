<template>
    <div class="car">
        <Cartnavbar tabname="购物车"></Cartnavbar>
        <Cardetail></Cardetail>
        <Carbottom></Carbottom>
    </div>
</template>

<script>
import Cartnavbar from "./childrenComps/Cartnavbar.vue";
import Cardetail from "./childrenComps/Cardetail.vue";
import Cardetailitem from "./childrenComps/Cardetailitem.vue";
import Carbottom from "./childrenComps/Carbottom.vue";

    export default {
    components: { Cartnavbar, Cardetail, Cardetailitem, Carbottom },

}
</script>

<style lang="less" scoped>
.car{
    
}
</style>