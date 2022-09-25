<template>
    <div class="maintabbar">
        <Tabbar>
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
            <Tabbaritem link="/profile">
                <template v-slot:item-icon>
                    <img src="@/assets/img/tabbar/profile.svg" alt="">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/tabbar/shopcart_active.svg" alt="">
                </template>
                <template v-slot:item-name>
                    <h5>个人中心</h5>
                </template>
            </Tabbaritem>
        </Tabbar>
    </div>
</template>

<script>
import Tabbar from './Tabbar.vue';
import Tabbaritem from './Tabbaritem.vue';
export default {
    data(){
        return{}
    },
    components:{Tabbar, Tabbaritem}
}
</script>

<style lang="less" scoped>
    .tabbaritem {
    flex: 1;
    text-align: center;
    width: 100%;
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