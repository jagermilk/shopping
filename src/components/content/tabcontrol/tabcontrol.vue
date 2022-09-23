<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in title" :key="item"
        @click="changeindex(index)"
        :class="{active:index==currentIndex}"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentIndex:0
        }
    },
    props: {
        title: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods:{
        changeindex(index){
            this.currentIndex=index
            this.$emit('getgoodsname',index)
        },

    }
}
</script>

<style lang="less" scoped>
    .tabcontrol{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            flex:1;
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 15px;
            
            span{
               padding:5px; 
            }
        }
    }
    .active span{
        color: pink;
        border-bottom: 3px pink solid;
    }
</style>