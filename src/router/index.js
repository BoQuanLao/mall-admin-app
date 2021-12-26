import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!(store.state.user.appkey && store.state.user.username && store.state.user.email)) {
      return next('/login');
    }
  } else if (to.path === '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.email) {
      return next(from.fullPath);
    }
  }
  return next();
});

export default router;
