<template>
    <div class="DetailShop">
        <div class="logo">
            <img :src="shopInfo.logo" alt="">
            <span>{{shopInfo.name}}</span>
        </div>
        <div class="sales">
            <div class="left">
                <div class="left1">
                    <div class="top">{{shopInfo.sells}}</div>
                    <div class="bottom">总销量</div>
                </div>
                <div class="right1">
                    <div class="top">{{shopInfo.fans}}</div>
                    <div class="bottom">全部宝贝</div>
                </div>
            </div>
            <div class="right" >
                <div v-for="item in shopInfo.score" class="detailright">
                    <div class="left2">{{item.name}}</div>
                    <div class="middle2" :class="{isBettertext:item.isBetter}">{{item.score}}</div>
                    <div class="right2" :class="{isBetter:item.isBetter}">{{item.isBetter? '高':'低'}}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        props:{
            shopInfo:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .DetailShop{
        width: 90%;
        margin: 0 auto;
        padding: 5px 0px 0px 5px ;
        display: flex;
        flex-direction: column;
        .logo{
            flex:2;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                width: 40px;
                margin-right: 8px;
            }
            span{
                color: gray;
            }
        }
        .sales{
            height: 70px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            .left{
                width: 50%;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                
                .left1{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                .bottom{
                    margin-top: 6px;
                    font-size: 12px;
                }
                }
                .right1{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-right:1px solid rgb(200, 200, 200) ;
                font-size: 20px;
                padding-right: 20px;
                .top{
                   margin-bottom: 0px!important; 
                }
                .bottom{
                    margin-top: 6px;
                    font-size: 12px;
                }
                }
            }
            .right{
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content:space-evenly;
                font-size: 14px;
                .detailright{
                    flex:1;
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 3px;
                    .right2{
                        background-color: red;
                        flex: 1;
                        border-radius: 3px;
                        color:white;
                        text-align: center;
                    }
                    .left2{
                        flex:4;
                        text-align: center;
                        
                    }
                    .middle2{
                        flex:3;
                        text-align:center;
                        color:red;
                    }
                }
            }
        }
    }
    .isBetter{
        background-color:green!important;
    }
    .isBettertext{
        color:green!important;
    }
</style>