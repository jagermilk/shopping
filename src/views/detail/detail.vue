<template>
    <div class="detail">
        <Detailbar tabname="详情页" @scroll="scroll" ref="tabbar"></Detailbar>
        <DetailSwiper :topimages="topimages"></DetailSwiper>
        <Detailinfo :GoodsInfo="GoodsInfo"></Detailinfo>
        <DetailShop :shopInfo="shopInfo"></DetailShop>
        <Detailgoods :goodsDetail="goodsDetail"></Detailgoods>
        <Detailparams :GoodsParams="GoodsParams" ref="params"></Detailparams>
        <DetailCommend :Commend="Commend" ref="commend"></DetailCommend>
        <Recommend :goods="recommend" ref="recommend"></Recommend>
        <Detailbottombar @addcar="addcar"></Detailbottombar>
        <Toast :message="toastinfo" :show="show"></Toast>
        <Backtop v-show="showback" @isshow="isshow"></Backtop>
        {{id}}
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>

        </ul>
    </div>
</template>

<script>


import Detailbar from '@/components/content/navbar/Detailbar.vue';
import { getDetail, GoodsInfo, ShopInfo, GoodsParam, commend, getrecommend } from '@/network/detail'
import Backtop from '@/components/content/backtop/backtop.vue';

import DetailSwiper from './chilidComps/DetailSwiper.vue';
import Detailinfo from './chilidComps/detailinfo.vue';
import DetailShop from './chilidComps/DetailShop.vue';
import Detailgoods from './chilidComps/Detailgoods.vue';
import Detailparams from './chilidComps/Detailparams.vue';
import DetailCommend from './chilidComps/DetailCommend.vue';
import Recommend from '@/components/content/recommend/recommend.vue';
import Detailbottombar from './chilidComps/Detailbottombar.vue';
import Toast from '@/components/common/toast/toast.vue';

export default {
    name: "detail",
    data() {
        return {
            showback: false,
            iid: '',
            topimages: [],
            GoodsInfo: {},
            shopInfo: {},
            goodsDetail: {},
            GoodsParams: {},
            Commend: {},
            recommend: {},
            themeTopY: [],
            currentIndex: 0,
            toastinfo: '',
            show: false
        }

    },
    computed: {

    },
    created() {
        this.iid = this.$route.params.id;
        getDetail(this.iid).then((res) => {
            console.log(res)
            //获取顶部轮播数据
            this.topimages = res.result.itemInfo.topImages
            this.GoodsInfo = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
            this.shopInfo = new ShopInfo(res.result.shopInfo)
            this.goodsDetail = res.result.detailInfo
            this.GoodsParams = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
            this.Commend = new commend(res.result.rate)
        }).catch((err) => {
            console.log(err);
        }),
            getrecommend().then((res) => {
                console.log(res)
                this.recommend = res.data
            }).catch((err) => {
                console.log(err);
            })
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, false); // 监听（绑定）滚轮滚动事件
    },
    updated() {
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop - 50)
        this.themeTopY.push(this.$refs.commend.$el.offsetTop - 50)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop - 50)
    },

    methods: {
        isshow(payload) {
            this.showback = payload
        },
        scroll(index) {
            window.scrollTo(0, this.themeTopY[index], 100)
        },
        handleScroll() {
            if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < this.themeTopY[1]) {
                this.currentIndex = 0
            }
            if (document.documentElement.scrollTop >= this.themeTopY[1] && document.documentElement.scrollTop < this.themeTopY[2]) {
                this.currentIndex = 1
            }
            if (document.documentElement.scrollTop >= this.themeTopY[2] && document.documentElement.scrollTop < this.themeTopY[3]) {
                this.currentIndex = 2
            }
            if (document.documentElement.scrollTop >= this.themeTopY[3]) {
                this.currentIndex = 3
            }
            this.$refs.tabbar.currentIndex = this.currentIndex
        },
        addcar() {
            //获取商品信息
            const product = {}
            product.image = this.topimages[0],
                product.title = this.GoodsInfo.title,
                product.desc = this.GoodsInfo.desc
            product.price = this.GoodsInfo.lowNowPrice
            product.iid = this.iid
            //保存在vuex
            //拿给购物车使用
            //toast封装
            this.$store.dispatch('addcart', product).then(res => {
                this.show = true
                this.toastinfo = res
                setTimeout(() => {
                    this.show = false
                    this.toastinfo = ''
                }, 1000)
            })
        }
    },
    components: { Detailbar, DetailSwiper, Detailinfo, DetailShop, Detailgoods, Detailparams, DetailCommend, Recommend, Detailbottombar, Toast, Backtop }
}
</script>

<style lang="less" scoped>

</style>