<template>
    <div class="detailcommend">
        <div class="title">
            <div>评论列表</div>
            <div>更多></div>
        </div>
        <div class="commend">
            <div class="commender">
                <div>
                  <img :src="Commend.list.user.avatar" alt=""/>  
                </div>
                
                <div>{{Commend.list.user.uname}}</div>
            </div>
            <div class="commendtext">
                
                {{Commend.list.content}}
            </div>
            <div class="commendtype" >
                {{formatdata}}
            {{Commend.list.style}}
            </div>
            <div class="commendimg">
                <div class="imgs" v-for="item in Commend.list.images">
                <img :src="item" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    export default {
        computed:{
            formatdata(){
                return dayjs(this.Commend.list.created).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        props:{
            Commend:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .detailcommend{
        height: 250px;
        width: 95%;
        margin: auto;
        margin-bottom:15px;

    }
    .title{
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(239, 239, 239);
    }
    .commend{
        font-size: 16px;
        margin-top: 9px;
        height: 100px;
        .commender{
        display: flex;
        align-items: center;
        height: 40px;
        img{
            width:40px;
            margin-right: 10px;
        } 
    
        }
    }
    .commendtype{
        margin-top: 10px;
        font-size: 15px;
        color: gray;
    }
    .commendimg{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content:left;
        img{
            width: 70px;
            margin-right: 10px;
        }
    }
</style>