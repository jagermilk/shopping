<template>
    <div class="mainnavbar">
<Navbar>
            <template #left></template>
            <template #middle>{{tabname}}</template>
            <template #right></template>
        </Navbar>
    </div>
        
</template>

<script>
import Navbar from './navbar.vue';
    export default {
        props:{
            tabname:String
        },
    components: { Navbar }
}
</script>

<style lang="less" scoped>
.mainnavbar{
    position: fixed;
    z-index: 9;
}
</style>