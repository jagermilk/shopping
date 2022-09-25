<template>
    <div class="recommenditem" @click="getid">
        <div class="gooditem">
                <img :src="goodItem.image" alt=""/>         
            <p>{{goodItem.title}}</p>
            <div class="gooddetail">
                <span>¥{{goodItem.price}}</span>
            <span>🌟{{goodItem.itemSale}}</span>
        </div>
        </div>
    </div>
</template>

<script>
import { objectExpression } from '@babel/types';

export default {
    props: {
        goodItem: {
            type: Object,
            default() {
                return {}
            }
        },
    },
    methods:{
        getid(){
            // this.$router.push('/detail/'+this.goodItem.item_id)
        }
    }
}
</script>

<style lang="less" scoped>
.recommenditem {
    width: 45%;
    margin: 5px;
    margin-bottom: 0px;

    .gooditem {
        img {
            border-radius: 8px;
            max-width: 100%;
            max-height: 100%;
        }

        p {
            margin: 10px 0px 0px 0px;
            line-height: 100%;
            white-space: nowrap; //禁止换行
            overflow: hidden; //超出隐藏
            text-overflow: ellipsis //显示省略号
        }
        .gooddetail{ 
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            span{
                margin:5px;
            }
        }
    }
}
</style>