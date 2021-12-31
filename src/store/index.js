import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getAllUserCookie, removeAllUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 切换菜单的闭合状态， false 代表不闭合， true 代表闭合
    user: getAllUserCookie(),
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },

    setUserInfo(state, info) {
      state.user = info;
    },

    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },

    setMenuRoutes(state, payload) {
      state.menuRoutes = [...payload];
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },

    setUserInfo({ commit }, info) {
      setCookie(info);
      commit('setUserInfo', info);
    },
    logout({ commit }) {
      removeAllUserCookie();
      commit('logout');
    },

    setMenuRoutes({ commit }, payload) {
      commit('setMenuRoutes', payload);
    },
  },
  modules: {
  },
});
