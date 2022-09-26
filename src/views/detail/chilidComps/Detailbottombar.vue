<template>
    <div class="bottombar">
        <Tabbar>
            <div class="left">
                <Tabbaritem link="">
                    <template v-slot:item-icon>
                        <div class="icon1"></div>
                    </template>
                    <template v-slot:item-icon-active>
                        <div class="icon1"></div>
                    </template>
                    <template v-slot:item-name>
                        <h5>客服</h5>
                    </template>
                </Tabbaritem>

                <Tabbaritem link="">
                    <template v-slot:item-icon>
                        <div class="icon2"></div>
                    </template>
                    <template v-slot:item-icon-active>
                        <div class="icon2"></div>
                    </template>
                    <template v-slot:item-name>
                        <h5>店铺</h5>
                    </template>
                </Tabbaritem>
                <Tabbaritem link="">
                    <template v-slot:item-icon>
                        <div class="icon3"></div>
                    </template>
                    <template v-slot:item-icon-active>
                        <div class="icon4"></div>
                    </template>
                    <template v-slot:item-name>
                        <h5>收藏</h5>
                    </template>
                </Tabbaritem>
            </div>
            <div class="right">
                <div class="car" @click="addcar">加入购物车</div>
                <div class="buy">购买</div>
            </div>

        </Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/content/tabbar/Tabbar.vue';
import Tabbaritem from '@/components/content/tabbar/Tabbaritem.vue';
export default {
    data() {
        return {}
    },
    methods:{
        addcar(){
            this.$emit('addcar')
        }
    },
    components: { Tabbar, Tabbaritem }
}
</script>

<style lang="less" scoped>
.bottombar {
    height: 49px;
    width: 100%;
    position: fixed;
    z-index: 99;
    .tabbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between !important;
        align-items: center;

        .left {
            margin-left: 30px;
            display: flex;
            flex-direction: row;
            justify-content: center !important;

            .tabbaritem {
                margin-right: 25px;

                div {
                    margin-top: 3px;
                    width: 30px;
                    height: 30px;
                    vertical-align: middle;
                    display: inline-block;
                    background: url(@/assets/img/detail/detail_bottom.png) no-repeat;
                }

                .icon1 {
                    width: 30px;
                    height: 30px;
                    background-position: 0 -72px;
                    background-size: 30px;
                }

                .icon2 {
                    width: 30px;
                    height: 30px;
                    background-position: 0 -135px;
                    background-size: 30px;
                }

                .icon3 {
                    width: 30px;
                    height: 30px;
                    background-position: 0 0px;
                    background-size: 30px;
                }

                .icon4 {
                    width: 30px;
                    height: 30px;
                    background-position: 0 -36px;
                    background-size: 30px;
                }

                h5 {
                    font-size: 16px;
                    font-weight: 400;
                    color: rgb(179, 179, 179);
                }
            }
        }

        .right {
            display: flex;
            flex-direction: row;

            .car {
                padding: 15px;
                font-weight: 400;
                background-color: yellow;
            }

            .buy {
                padding: 15px;
                font-weight: 400;
                background-color: pink;
                color: white;
            }
        }
    }




    h5 {
        font-size: 17px;
        margin: 0px;
    }
}
</style>