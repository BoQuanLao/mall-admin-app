import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { routes, asyncRoutes } from './routes';
import getMenuRoute from '@/utils/permission';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

let isAdd = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!(store.state.user.appkey && store.state.user.username && store.state.user.email)) {
      return next('/login');
    }
    if (!isAdd) {
      // 获得角色路由
      const extraRoutes = getMenuRoute(store.state.user.role, asyncRoutes);
      // 过滤不需要显示的路由
      const allRoutes = routes.concat(extraRoutes).filter((it) => {
        if (it.children) {
          return it.children.filter((children) => children.meta.hidden === false);
        }
        return it.meta.hidden === false;
      });
      // 分发状态，设置路由
      store.dispatch('setMenuRoutes', allRoutes).then(() => {
        // 添加角色特有路由
        router.addRoute(extraRoutes[0]);
      });
      isAdd = true;
    }
    return next();
  } if (to.path === '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.email) {
      return next(from.fullPath);
    }
  }
  return next();
});

export default router;
