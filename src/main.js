import Vue from 'vue';
import VeLine from 'v-charts/lib/line.common';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import '@/assets/css/reset.less';

Vue.config.productionTip = false;

// 使用 v-charts 折线图
Vue.component(VeLine.name, VeLine);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
