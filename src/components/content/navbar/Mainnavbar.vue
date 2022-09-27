<template>
    <div class="mainnavbar">
<Navbar>
            <template #left></template>
            <template #middle>{{tabname}}</template>
            <template #right>
                <div class="car" @click="this.$router.push('/car')">
                    <img src="@/assets/img/detail/cart.png" alt="">
                    <span>{{carmount}}</span>
                </div>
            </template>
        </Navbar>
    </div>
        
</template>

<script>
    import { mapGetters } from 'vuex';
import Navbar from './navbar.vue';
    export default {
        props:{
            tabname:String
        },
        computed:{
        ...mapGetters(['carmount'])
    },
    components: { Navbar }
}
</script>

<style lang="less" scoped>
.mainnavbar{
    position: fixed;
    z-index: 9;
}
.car{
    display: flex;
    justify-content: center;
    align-items: center;
  img{
        width: 30px;
    }
    span{
        font-size: 20px;
        color: rgb(255, 255, 255);
    }  
}

</style>