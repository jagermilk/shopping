<template>
    <div class="bottombar">
        <Tabbar>
            <div class="left">
                <Tabbaritem link="/home">
                    <template v-slot:item-icon>
                        <img src="@/assets/img/tabbar/home.svg" alt="">
                    </template>
                    <template v-slot:item-icon-active>
                        <img src="@/assets/img/tabbar/home_active.svg" alt="">
                    </template>
                    <template v-slot:item-name>
                        <h5>首页</h5>
                    </template>
                </Tabbaritem>

                <Tabbaritem link="/goods">
                    <template v-slot:item-icon>
                        <img src="@/assets/img/tabbar/category.svg" alt="">
                    </template>
                    <template v-slot:item-icon-active>
                        <img src="@/assets/img/tabbar/category_active.svg" alt="">
                    </template>
                    <template v-slot:item-name>
                        <h5>商品</h5>
                    </template>
                </Tabbaritem>
                <Tabbaritem link="/car">
                    <template v-slot:item-icon>
                        <img src="@/assets/img/tabbar/shopcart.svg" alt="">
                    </template>
                    <template v-slot:item-icon-active>
                        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="">
                    </template>
                    <template v-slot:item-name>
                        <h5>购物车</h5>
                    </template>
                </Tabbaritem>
            </div>
            <div class="right">
                <div class="car">加入购物车</div>
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
    components: { Tabbar, Tabbaritem }
}
</script>

<style lang="less" scoped>
.bottombar {
    height: 49px;



    .tabbar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        .left { 
    
            display: flex;
            flex-direction: row;

        }

        .right {
            width: 180px;
            display: flex;
            flex-direction: row;
            .car{
                padding:15px;
                background-color: pink;
            }
            .buy{
                padding:15px;
                background-color: yellow;

            }
        }
    }



    img {
        margin-top: 3px;
        width: 22px;
        height: 22px;
        vertical-align: middle;
    }

    h5 {
        font-size: 17px;
        margin: 0px;
    }
}
</style>