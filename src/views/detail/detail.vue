<template>
    <div class="detail">
        <Detailbar tabname="详情页"></Detailbar>
        <DetailSwiper :topimages="topimages"></DetailSwiper>
    {{id}}
    </div>
</template>

<script>


import Detailbar from '@/components/content/navbar/Detailbar.vue';
import {getDetail} from '@/network/detail'
import DetailSwiper from './chilidComps/DetailSwiper.vue';
export default {
    name:"detail",
    data() {
        return{
          iid: null,
        topimages:[]  
        }
        
    },
    created() {
        this.iid = this.$route.params.id;
        getDetail(this.iid).then((res)=>{
                console.log(res)
                //获取顶部轮播数据
                this.topimages=res.result.itemInfo.topImages
            }).catch((err)=>{
                console.log(err);
            })
    },
    components: { Detailbar, DetailSwiper }
}
</script>

<style lang="less" scoped>

</style>