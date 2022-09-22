import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
  },

  mutations: {
    addList(state, payload) {
      state.todoList.unshift(payload);
    },
  },
});
