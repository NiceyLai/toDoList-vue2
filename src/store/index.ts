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
      this.commit("saveList");
    },
    selected(state, payload) {
      state.todoList.find((item) => item.id === payload.id).done = true;
      this.commit("saveList");
    },
    noSelected(state, payload) {
      state.todoList.find((item) => item.id === payload.id).done = false;
      this.commit("saveList");
    },
    removeList(state, payload) {
      const index = state.todoList.findIndex((item) => item?.id === payload.id);
      if (index >= 0) {
        state.todoList.splice(index, 1);
        this.commit("saveList");
      }
    },
    getList(state) {
      state.todoList = JSON.parse(localStorage.getItem("listTodo"));
      if (state.todoList !== null) {
        JSON.parse(state.todoList);
      }
      state.todoList = [];
    },

    saveList(state) {
      window.localStorage.setItem("listTodo", JSON.stringify(state.todoList));
    },
  },
});
