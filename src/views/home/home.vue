<template>
    <div class="home">
        <Mainnavbar tabname="购物街"></Mainnavbar>
        <HomeSwiper :banners="banners"></HomeSwiper>
        <RecommendView :recommends="recommends"></RecommendView>
        <FeatureView></FeatureView>
        <Tabcontrol :title="title" class="tab-control" @getgoodsname="getgoodsname"></Tabcontrol>
        <Goodslist :goods="goods[goodsname]"></Goodslist>
        <Backtop @click.native="backclick" v-show="isshow"></Backtop>

    </div>
</template>

<script>

import { getHomeMultidata, getHomeGoods } from 'network/home'
import Mainnavbar from '@/components/content/navbar/Mainnavbar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue';
import Tabcontrol from '@/components/content/tabcontrol/tabcontrol.vue';
import Goodslist from '@/components/content/goods/Goodslist.vue';
import Backtop from '@/components/content/backtop/backtop.vue';

import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/featureView.vue';


export default {
    data() {
        return {
            isshow:false,
            banners: [],
            recommends: [],
            title: ['流行', '新款', '精选'],
            goodsname: 'pop',
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] }
            }

        }
    },
    created() {
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll, false); // 监听（绑定）滚轮滚动事件
      },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
      },
    
    methods: {
        getHomeMultidata() {
            getHomeMultidata().then((res) => {
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            }).catch((err) => {
                console.log(err)
            });

        }, getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then((res) => {
                // for(let item of res.data.list){
                //    this.goods[type].list.push(item) 
                // }
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page = page

            })
        },
        getgoodsname(index) {
            switch (index) {
                case 0:
                    this.goodsname = 'pop'
                    break
                case 1:
                    this.goodsname = 'new'
                    break
                case 2:
                    this.goodsname = 'sell'
            }
        },
        backclick() {
            window.scrollTo(0, 0)
        },
        handleScroll() {
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;  
            // 设备/屏幕高度
            let scrollObj = document.getElementsByClassName("home"); // 滚动区域
            let scrollTop = window.pageYOffset; // div 到头部的距离
            let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
            //滚动条到底部的条件
            if(scrollTop+clientHeight == scrollHeight){
                // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
            }
            if(scrollTop>=600){
                console.log(111);
                this.isshow=true
            }
            if(scrollTop<600){
                console.log(222);
                this.isshow=false
            }  
        }

    },

    components: { Mainnavbar, HomeSwiper, RecommendView, FeatureView, Tabcontrol, Goodslist, Backtop }
}




</script>

<style lang="less" scoped>
h1 {
    margin-top: 60px;
}

.home {
    position: relative;

    .tab-control {
        position: sticky;
        top: 44px;
        background-color: rgb(255, 255, 255);
    }
}
</style>