<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="middle"><slot name="middle"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .navbar{
        background-color: rgb(236, 177, 177);
        height: 50px;
        line-height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position:fixed;
        top:0px;
        font-size:30px;
        .left{
            height: 50px;
            width: 80px;

            text-align: center;
        }
        .middle{
            height: 50px;
            flex:1;
            text-align: center;
        }
        .right{
            height: 50px;
            width:80px;
            text-align: center;
        }
    }
</style>