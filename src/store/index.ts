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
    selected(state, payload) {
      state.todoList.find((item) => item.id === payload.id).done = true;
    },
    noSelected(state, payload) {
      state.todoList.find((item) => item.id === payload.id).done = false;
    },
    removeList(state, payload) {
      const index = state.todoList.findIndex((item) => item?.id === payload.id);
      if (index >= 0) {
        state.todoList.splice(index, 1);
      }
    },
  },
});
