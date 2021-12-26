<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Home /> -->
  </div>
</template>

<script>
// import Home from '@/views/Layout/Home.vue';

export default {
  name: 'app',
  components: {
    // Home,
  },
};
</script>

<style>
body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
