<template>
    <div class="homeswiper">
        <Swiper>
              <SwiperItem v-for="item in banners" :key="item.link">
                <a :href="item.link">
                <img :src="item.image" alt="">
                </a>
              </SwiperItem>  
        </Swiper>
    </div>
</template>

<script>
    import Swiper from '@/components/common/swiper/Swiper.vue';
import SwiperItem from '@/components/common/swiper/SwiperItem.vue';
    export default {
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            },
        },
        components: {Swiper, SwiperItem }
    }
</script>

<style lang="less" scoped>
    .homeswiper{
        img{
            display: inline-block;
            max-height: 100%;
            max-width: 100%;
        }
        }
</style>