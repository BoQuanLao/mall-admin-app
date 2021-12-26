import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Layout/Home.vue'),
    meta: {
      title: '首页',
    },
    children: [{
      path: '/index',
      name: 'Index',
      component: () => import('@/views/page/index.vue'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];
export default routes;
