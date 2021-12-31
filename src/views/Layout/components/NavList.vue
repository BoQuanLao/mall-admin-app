<template>
  <a-menu
    :default-selected-keys="[
      $router.currentRoute.matched[1]
        ? $router.currentRoute.matched[1].name
        : '',
    ]"
    :default-open-keys="[$router.currentRoute.matched[0].name]"
    mode="inline"
    theme="dark"
    :inline-collapsed="$store.state.collapsed"
  >
    <a-sub-menu v-for="routes in $store.state.menuRoutes" :key="routes.name">
      <span slot="title">
        <a-icon :type="routes.meta.icon" />
        <span>{{ routes.meta.title }}</span>
      </span>
      <a-menu-item v-for="children in routes.children" :key="children.name">
        <router-link :to="children.path">
          <a-icon :type="children.meta.icon" />
          {{ children.meta.title }}
        </router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
