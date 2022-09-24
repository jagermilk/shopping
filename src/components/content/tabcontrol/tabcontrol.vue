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
            background-image: linear-gradient(200grad, rgb(255, 209, 209), rgb(255, 255, 255));
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
        color:rgb(255, 110, 134);
        border-bottom: 3px solid rgb(255, 110, 134);
    }
</style>