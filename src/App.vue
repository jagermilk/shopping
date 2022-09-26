<template>
  <div class="app">
    <keep-alive exclude="detail">
      <router-view>
      </router-view>
      
    </keep-alive>
<Maintabbar></Maintabbar>
    
  </div>
</template>

<script>
import Navbar from './components/content/navbar/navbar.vue';
import Maintabbar from './components/content/tabbar/Maintabbar.vue';

export default {


  components: { Navbar, Maintabbar }
}
</script>

<style>
  
  @import "assets/css/base.css"



</style>