<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{msg}}
    {{vuexMessage}}
    <br>
    <p>Counter: {{counting}}</p>
    <br>
    <div class="count">
      <button @click="pressed">Increment</button>
     <button @click="unpressed">Decrement</button>
    </div>
    <br><br>
    

    <div class="content-header">
      <div class="add-items">
        <input class="input-add" type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Submit" @click="add">
      </div>

      <div class="filter">
        <label for="">Filter Todos:  </label>
        <select @change="filterTodos($event)">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
      </div>

    </div>

    <div class="items">
      <div class="list-items" v-for="todo in todos" :key="todo.id">
        <p>{{todo.title}} <i style="margin-left: 50px; cursor: pointer;" @click="removeTodos(todo.id)" class="fas fa-trash-alt"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "App",
  data() {
    return {
      msg: "Hello World",
      posts: [],
      title: ''
    };
  },
  computed: {
    vuexMessage() {
      return this.$store.getters.message;
    },
    counting() {
      return this.$store.getters.counter;
    },
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    pressed() {
      this.$store.commit("increment", 10);
    },
    unpressed() {
      this.$store.commit("decrement", 10);
    },
    ...mapActions(['getTodos', 'addTodos', 'filterTodos', 'removeTodos']),
    add() {
      this.addTodos(this.title)
    }
  },
  mounted() {
    this.posts = this.$store.state.posts;
    this.getTodos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-items {
  margin: 5px 0px;
  font-weight: 800;
  height: 69px;
  color: white;
  background: #42b983;
}
.items {
  text-align: center;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: white;
  }
  .content-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  select {
    width: 150px;
    height: 40px;
  }
  .input-add {
    height: 40px;
    width: 350px;
    border-radius: 5px;
    margin-right: 20px;
    padding-left: 10px;
    font-size: 16px;
  }

  input[type=submit] {
    height: 40px;
    width: 70px;
    color: white;
    border-radius: 5px;
    margin-right: 20px;
    background: #42b983;
    font-weight: 900;
    }

</style>
