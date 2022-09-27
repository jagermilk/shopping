<template>
    <div class="backtop" @click="backclick" >
        <img src="@/assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return{
          isshow: false
        }
        
    },
    methods: {
        backclick() {
        window.scrollTo(0, 0)
    },
    handleScroll() {
        //let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 设备/屏幕高度
        //let scrollObj = document.getElementsByClassName("home"); // 滚动区域
        let scrollTop = window.pageYOffset; // div 到头部的距离
        console.log(scrollTop);
        //let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
        //滚动条到底部的条件
        //if (scrollTop + clientHeight == scrollHeight) {
            // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
        //}
        if (scrollTop >= 600) {
            console.log(111);
            this.isshow = true
        }
        if (scrollTop < 600) {
            console.log(222);
            this.isshow = false
        }
        this.$emit('isshow',this.isshow)
    }
    },
    updated: function () {
        window.addEventListener('scroll', this.handleScroll, false); // 监听（绑定）滚轮滚动事件
    },

}
</script>

<style lang="less" scoped>
.backtop {
    position: fixed;
    right: 8px;
    bottom: 50px;

    img {
        width: 50px;
    }
}
</style>