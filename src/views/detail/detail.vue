<template>
    <div class="detail">
        <Detailbar tabname="详情页"></Detailbar>
        <DetailSwiper :topimages="topimages" ></DetailSwiper>
        <Detailinfo :GoodsInfo="GoodsInfo"></Detailinfo>
        <DetailShop :shopInfo="shopInfo"></DetailShop>
        <Detailgoods :goodsDetail="goodsDetail"></Detailgoods>
    {{id}}
    </div>
</template>

<script>


import Detailbar from '@/components/content/navbar/Detailbar.vue';
import {getDetail,GoodsInfo,ShopInfo} from '@/network/detail'
import DetailSwiper from './chilidComps/DetailSwiper.vue';
import Detailinfo from './chilidComps/detailinfo.vue';
import DetailShop from './chilidComps/DetailShop.vue';
import Detailgoods from './chilidComps/Detailgoods.vue';
export default {
    name:"detail",
    data() {
        return{
          iid: null,
          topimages:[],
          GoodsInfo:null,
          shopInfo:null,
          goodsDetail:null  
        }
        
    },
    created() {
        this.iid = this.$route.params.id;
        getDetail(this.iid).then((res)=>{
                console.log(res)
                //获取顶部轮播数据
                this.topimages=res.result.itemInfo.topImages
                this.GoodsInfo=new GoodsInfo(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
                this.shopInfo=new ShopInfo(res.result.shopInfo)
                this. goodsDetail=res.result.detailInfo
            }).catch((err)=>{
                console.log(err);
            })
    },
    components: { Detailbar, DetailSwiper, Detailinfo, DetailShop, Detailgoods }
}
</script>

<style lang="less" scoped>

</style>