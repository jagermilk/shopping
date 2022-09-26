<template>
    <div class="caritem">
        <div class="selector">
            <input type="checkbox" :checked="caritems.checked" @click="changecheck(caritems.iid)">
        </div>
        <div class="img">
            <img :src="caritems.image" alt="">
        </div>
        <div class="info">
            <div class="title">{{caritems.title}}</div>
            <div class="desc">{{caritems.desc}}</div>
            <div class="bottom">
                <div class="price">{{caritems.price}}</div>
                <div class="count">x{{caritems.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: {
        caritems: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods:{
        changecheck(payload){
            this.$store.commit('changecheck',payload)
        }
    }
}
</script>

<style lang="less" scoped>
.caritem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 99px;
    margin-right: 10px;
    margin-left: 10px;
    .img {
        margin-right: 10px;
        img {
            width: 60px;
        height: 80px;
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between !important;
        color: gray;
        .title {
            font-size: 15px;
            width: 250px;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 10px;
        }

        .desc {
            font-size: 12px;
            width: 250px;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 20px;
        }
        .bottom{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .price{
                color: pink;
            }
        }
    }

}
</style>