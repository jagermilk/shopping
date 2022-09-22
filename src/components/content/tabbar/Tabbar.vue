<template>
    <div class="tabbar">
        <slot></slot>
    </div>>
</template>

<script>
import Tabbaritem from './Tabbaritem.vue';
    export default {
    components: { Tabbaritem }
}
</script>

<style lang="less" scoped>
    .tabbar{
        background-color: #f6f6f6;
        display: flex;
        width: 100%;
        height: 49px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0px;
        box-shadow: 0px -3px 1px rbga(0,0,0.5);
       
    }
</style>

