<template>
    <div class="detailgoods">
        <div class="desc">{{goodsDetail.desc}}
        <div>{{goodsDetail.detailImage[0].key}}</div>
        </div>
        <div class="imgs">

            
            <template v-for="item in goodsDetail.detailImage[0].list" :key="item">
               <img :src="item" alt=""/>
            </template>
            
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            goodsDetail:{
                type:Array,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .detailgoods{
        margin-top: 20px;
        border-top: 1px solid rgb(229, 229, 229);
        padding-top:10px;
        .desc{
            div{
                margin-top: 10px;
                font-size: 15px;
            }
        }
        img{
            width:100%;
        }
    }
</style>