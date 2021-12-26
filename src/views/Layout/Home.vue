<template>
  <div class="home">
    <!-- 导航 -->
    <div class="menu-list">
      <NavList />
    </div>

    <!-- 主区域 -->
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavList from './components/NavList.vue';
import Header from './components/Header.vue';

export default {
  components: {
    NavList,
    Header,
  },
};
</script>

<style lang="less" scoped>
.home {
  .menu-list {
    width: 180px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    .ant-menu {
      height: 100%;
    }
  }
  .main-app {
    margin-left: 180px;
    transition: margin 0.3s;
    &.menu-unfold {
      margin-left: 80px;
    }
  }
}
</style>
