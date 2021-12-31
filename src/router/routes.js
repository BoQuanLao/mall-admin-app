import Login from '../views/Login.vue';

export const asyncRoutes = [
  {
    path: '/product',
    name: 'Product',
    redirect: '/productlist',
    meta: {
      title: '商品',
      icon: 'inbox',
      hidden: false,
    },
    component: () => import('@/views/Layout/Home.vue'),
    children: [
      {
        path: '/productlist',
        name: 'ProductList',
        meta: {
          title: '商品列表',
          hidden: false,
          icon: 'unordered-list',
        },
        component: () => import('@/views/page/ProductList.vue'),
      },
      {
        path: '/productadd',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
          hidden: false,
          icon: 'file-add',
        },
        component: () => import('@/views/page/ProductAdd.vue'),
      },
      {
        path: '/category',
        name: 'Category',
        meta: {
          title: '类目管理',
          hidden: false,
          icon: 'project',
        },
        component: () => import('@/views/page/Category.vue'),
      },
    ],
  },
];

export const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('@/views/Layout/Home.vue'),
    meta: {
      hidden: false,
      title: '首页',
      icon: 'home',
    },
    children: [{
      path: '/index',
      name: 'Index',
      meta: {
        hidden: false,
        title: '统计',
        icon: 'number',
      },
      component: () => import('@/views/page/index.vue'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hidden: true,
      title: '登录',
    },
  },
];
