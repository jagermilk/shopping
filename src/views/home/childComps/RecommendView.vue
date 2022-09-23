<template>
    <div class="recommendview">
        <div v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="title">{{item.title}}</div>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.recommendview {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px 0px 10px 0px;
    border-bottom: 8px solid #eee;
    div {
        flex: 1;
        display: flex;
        justify-content: center;
        a {
            text-decoration: none;
            img {
                max-width: 65px;
                max-height: 65px;
            }
            .title {
                text-align: center;
                font-size: 14px;
            }
        }

    }
}
</style>