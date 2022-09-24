<template>
    <div class="detailinfo" v-if="Object.keys(GoodsInfo).length !==0">
        <div class="infotitle">
            {{GoodsInfo.title}}
        </div>
        <div class="infoprice">
            <span class="left">¥{{GoodsInfo.lowNowPrice}}</span>
            <span class="center">
                {{GoodsInfo.oldPrice}}
            </span>
            <span class="right">
                {{GoodsInfo.discountDesc}}
            </span>
        </div>
        <div class="infosale">
            <span>{{GoodsInfo.columns[0]}}</span>
            <span>{{GoodsInfo.columns[1]}}</span>
            <span>{{GoodsInfo.columns[2]}}</span>
        </div>
        <div class="services" >
            <div class="servicesitem" v-for="item in GoodsInfo.services" :key="item">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            GoodsInfo:{
                type:Array,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .detailinfo{
        margin-top: 5px;
        padding:0px 5px;
        height: 140px;
        box-shadow:0px 0px 1px 0px gray;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .infotitle{
            font-size: 15px;
        }
        .infoprice{
            position: relative;
            top:5px;
            .left{
                color:rgb(247, 87, 114);
                font-weight: 800;
                font-size: 20px;
                margin-right: 10px;
            }
            .center{
                text-decoration: line-through;
                margin-right: 5px;
                font-size: 13px;
            }
            .right{
                position: absolute;
                font-size: 13px;
                background-color: rgb(237, 97, 120);
                border-radius: 5px;
                color: white;
                font-weight: 600;
                top:-3px;
                
            }
        }
        .infosale{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: gray;
        }
        .services{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 3px;
            .servicesitem{
             font-size: 8px;
             color: gray;
            img{
                width: 10px;
            }  
            }
            
        }
    }

</style>