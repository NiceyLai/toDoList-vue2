import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

type TodoItem = { id: number | string; title: string; done: boolean };
const store = new Vuex.Store({
  state: {
    todoList: [] as TodoItem[],
  },

  mutations: {
    addList(state, payload) {
      state.todoList.unshift(payload);
      store.commit("saveList");
    },
    selected(state, payload) {
      const targetItem = state.todoList.find((item) => item.id === payload.id);
      if (targetItem) targetItem.done = true;
      store.commit("saveList");
    },
    noSelected(state, payload) {
      const targetItem = state.todoList.find((item) => item.id === payload.id);
      if (targetItem) targetItem.done = false;
      store.commit("saveList");
    },
    removeList(state, payload) {
      const index = state.todoList.findIndex((item) => item?.id === payload.id);
      if (index >= 0) {
        state.todoList.splice(index, 1);
        store.commit("saveList");
      }
    },
    getList(state) {
      if (localStorage.getItem("listTodo")) {
        console.log(44444);

        state.todoList = JSON.parse(localStorage.getItem("listTodo")!);
        console.log(55555);
      }
      console.log(33333);
    },

    saveList(state) {
      window.localStorage.setItem("listTodo", JSON.stringify(state.todoList));
    },
  },
});

export default store;