<template>
  <header>
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        欢迎，Guzz
        <a-icon type="down" />
      </li>
      <li>退出</li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>

<style lang="less" scoped>
header {
  position: relative;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  padding-left: 10px;
  margin-top: 4px;
  .breadcrumb {
    margin-left: 8px;
    display: inline-block;
  }
  .user-info {
    position: absolute;
    right: 20px;
    top: 0;
    cursor: pointer;
    z-index: 100;
    text-align: center;
    li {
      padding: 0 20px;
    }
    li:not(:first-child) {
      display: none;
      &:hover {
        font-weight: 700;
        background-color: #eee;
      }
    }
    &:hover {
      // background-color: white;
      li {
        display: block;
      }
    }
  }
}
</style>
