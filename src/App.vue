<template>
  <div class="app">
    <keep-alive exclude="detail">
      <router-view>
      </router-view>
      
    </keep-alive>

    
  </div>
</template>

<script>
import Navbar from './components/content/navbar/navbar.vue';

export default {


  components: { Navbar,  }
}
</script>

<style>
  
  @import "assets/css/base.css"



</style>