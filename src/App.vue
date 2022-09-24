<template>
  <div class="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
     <Maintabbar></Maintabbar>
    
  </div>
</template>

<script>
import Maintabbar from 'components/content/tabbar/Maintabbar';
import Navbar from './components/content/navbar/navbar.vue';

export default {


  components: { Maintabbar, Navbar,  }
}
</script>

<style>
  
  @import "assets/css/base.css"



</style>