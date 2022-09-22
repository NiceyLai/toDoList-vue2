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
    // delete(state, payload) {
    //   console.log(payload);
      
    // //  const s= state.todoList.find((item) => item.id === payload.id);
      
    // },
  },
});
