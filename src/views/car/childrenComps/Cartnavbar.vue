<template>
    <div class="cartabbar">
        <Navbar>
            <template #left>
                <img src="@/assets/img/common/back.svg" alt="" @click="this.$router.go(-1)">
            </template>
            <template #middle>{{tabname}}({{mount}})</template>
            <template #right></template>
        </Navbar>
    </div>
</template>

<script>
import Navbar from '@/components/content/navbar/navbar.vue';
import {mapGetters} from 'vuex'
    export default {
        props:{
            tabname:String
        },
        computed:{ 
            //方式一 数组    
            //...mapGetters(['carmount'])
            //方式二 对象 映射关系
            ...mapGetters({
                mount:'carmount'
            })
    },
    components: { Navbar }
}
</script>

<style lang="less" scoped>
img{
    width: 20px;
}
</style>