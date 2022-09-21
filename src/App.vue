<template>
  <div class="app">
    <router-view></router-view>
    <Maintabbar></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from './components/tabbar/Maintabbar.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {  Maintabbar }
}
</script>

<style lang="less" scoped>
.app {
  height: 800px;

  

}


</style>