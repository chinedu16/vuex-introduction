<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{msg}}
    {{vuexMessage}}
    <br>
    <p>Counter: {{counting}}</p>
    <br>
    <button @click="pressed">Increment</button>
    <button @click="unpressed">Decrement</button>
    <br>Filter Todo
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
    <br>
    
    <input type="text" v-model="title" placeholder="Add Todo...">
    <input type="submit" value="Submit" @click="add">

    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
</style>
