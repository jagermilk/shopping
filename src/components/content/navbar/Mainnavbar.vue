<template>
        <Navbar>
            <template #left></template>
            <template #middle>{{tabname}}</template>
            <template #right></template>
        </Navbar>
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

</style>