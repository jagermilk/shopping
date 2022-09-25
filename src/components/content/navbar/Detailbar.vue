<template>
    <div class="mainnavbar">
        <Navbar>
            <template #left>
                <img src="@/assets/img/common/back.svg" alt="" @click="goback">
            </template>
            <template #middle>
                <div class="detailnavitems">
                    <div v-for="(item,index) in titles" @click="showdetailtab(index)"
                        :class="{active:index==currentIndex}">
                        {{item}}</div>
                </div>
            </template>
            <template #right></template>
        </Navbar>
    </div>

</template>

<script>
import Navbar from './navbar.vue';

export default {
    created() {

    },
    props: {
        tabname: String,
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex:0
        }

    },
    methods: {
        showdetailtab(index) {
            this.currentIndex=index
            this.$emit('scroll',index)
        },
        goback() {
            this.$router.go(-1)
        }
    },
    components: { Navbar }
}
</script>

<style lang="less" scoped>
.mainnavbar {
    position: fixed;
    z-index: 9;

    .detailnavitems {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        div {
            font-size: 16px;
            height: 47px;
        }
    }
}

.active {
    color: rgb(255, 151, 151) !important;
}
</style>