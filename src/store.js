import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex, axios)

export default new Vuex.Store({

  state: {
    count: 0,
    message: "Message from Vuex",
    posts: [],
    todos: []
  },
  
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
    decrement(state, payload) {
      state.count -= payload;
      if (state.count < 0) {
        state.count = 0;
      }
    },
    SET_POST(state, post) {
      state.posts = post;
    },
    SET_TODO(state, todos) {
      state.todos = todos;
    },
    NEW_TODO(state, todo) {
      state.todos.unshift(todo);
    }
  },
  
  actions: {
    getPost({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          commit("SET_POST", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async getTodos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("SET_TODO", response.data);
    },
    async addTodos({ commit }, title) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title, completed: false }
      );
      commit("NEW_TODO", response.data);
    },
    async filterTodos({commit}, e){
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText);
        console.log(limit)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit("SET_TODO", response.data)
    }
  },
  
  getters: {
    message(state) {
      return state.message.toUpperCase();
    },
    counter(state) {
      return state.count;
    },
    todos(state) {
      return state.todos;
    }
  }
})
