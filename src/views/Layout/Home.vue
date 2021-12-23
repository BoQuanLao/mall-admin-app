<template>
  <div class="home">
    <!-- 导航 -->
    <div class="menu-list">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>商品</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="inbox" />
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="mail" /><span>Navigation One</span></span
          >
          <a-menu-item key="5"> Option 5 </a-menu-item>
          <a-menu-item key="6"> Option 6 </a-menu-item>
          <a-menu-item key="7"> Option 7 </a-menu-item>
          <a-menu-item key="8"> Option 8 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="appstore" /><span>Navigation Two</span></span
          >
          <a-menu-item key="9"> Option 9 </a-menu-item>
          <a-menu-item key="10"> Option 10 </a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11"> Option 11 </a-menu-item>
            <a-menu-item key="12"> Option 12 </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </div>

    <!-- 主区域 -->
    <div :class="{ 'main-app': true, 'menu-unfold': collapsed }">
      <header>
        <a-button
          type="primary"
          style="margin-bottom: 16px"
          @click="toggleCollapsed"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <div class="breadcrumb">
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">Application Center</a></a-breadcrumb-item
            >
            <a-breadcrumb-item
              ><a href="">Application List</a></a-breadcrumb-item
            >
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  .menu-list {
    width: 180px;
    position: fixed;
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
  }
}
</style>
