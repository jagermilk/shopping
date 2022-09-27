<template>
    <div class="toast" v-show="show">
        {{message}}
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                default(){
                    return ''
                }
            },
            show:{
                type:Boolean,
                default(){
                    return false
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .toast{
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 18px;
        width: 150px;
        background-color:rgba(65, 65, 65, 0.7);
        position:fixed;
        z-index: 19999;
        color: white;

    }
</style>