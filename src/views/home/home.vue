<template>
    <div class="home">
        <Mainnavbar tabname="购物街"></Mainnavbar>
        <HomeSwiper :banners="banners" ></HomeSwiper>
        <RecommendView :recommends="recommends"></RecommendView>
    </div>
</template>

<script>
import { getHomeMultidata } from 'network/home'
import Mainnavbar from '@/components/content/navbar/Mainnavbar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';

export default {
    data() {
    return {
        banners:[],
        recommends:[]
    }
    },
    created() {
        getHomeMultidata().then((res) => {
            this.banners = res.data.banner.list
            this.recommends=res.data.recommend.list
            console.log(this.banners);
            console.log(this.recommends);
        }).catch((err) => {
            console.log(err);
        });
    },
    components: { Mainnavbar, HomeSwiper, RecommendView }
}
</script>

<style lang="less" scoped>
    h1{
        margin-top: 60px;
    }
    .home{
        position: relative;
        
    }
    
    
</style>