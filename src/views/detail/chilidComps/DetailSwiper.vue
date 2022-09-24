<template>
    <div class="detailswiper">
        <Swiper class="swipers">
            <SwiperItem v-for="item in topimages" :key="item">
                <img :src="item" alt="">
            </SwiperItem>
        </Swiper>
    </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue';
import SwiperItem from '@/components/common/swiper/SwiperItem.vue';
export default {
    props: {
        topimages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: { Swiper, SwiperItem }
}
</script>

<style lang="less" scoped>
.detailswiper {
    width: 100%;
    .swipers{
        height: 300px;
        overflow: hidden;
    }
}
</style>