<template>
  <Header />
  <AddTodo @add-todo="addTodo" />
  <DoneFilter
    @filter-done-toggle="doneFilterToggler"
    :text="filterDone ? 'Put done todos BACK' : 'Filter OUT done todos'"
    :backgroundColor="filterDone ? 'lightgreen' : '#cc0000'"
    :color="filterDone ? 'grey' : 'white'"
  />
  <Todos
    @done-toggler="doneToggler"
    @delete-todo="deleteTodo"
    @edit-todo="editTodo"
    :todos="todos"
  />
</template>

<script>
import Todos from "./components/Todos.vue";
import DoneFilter from "./components/DoneFilter.vue";
import AddTodo from "./components/AddTodo.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo,
    DoneFilter
  },
  data() {
    return {
      todos: [],
      filterDone: false,
      payload: []
    };
  },
  methods: {
    async editTodo(payload) {
      const todoToEdit = await this.fetchTodo(payload.id);
      const editedTodo = {
        ...todoToEdit,
        title: payload.title,
        body: payload.body
      };

      await fetch(`http://localhost:3001/todos/${payload.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(editedTodo)
      });
      this.todos = await this.fetchTodos();
    },
    async deleteTodo(id) {
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE"
      });
      res.status === 200
        ? (this.todos = this.todos.filter(todo => todo.id !== id))
        : alert("Failed to delete todo");
    },
    async doneToggler(id) {
      const todoToToggle = await this.fetchTodo(id);
      const updatedTodo = { ...todoToToggle, done: !todoToToggle.done };
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
      });
      const data = await res.json();
      this.todos = this.todos.map(todo =>
        todo.id === id ? { ...todo, done: data.done } : todo
      );
    },
    async addTodo(todo) {
      console.log(todo);
      const res = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
      });
      const data = await res.json();
      this.todos = [...this.todos, data];
    },
    doneFilterToggler() {
      let filteredTodos = this.todos.filter(todo => todo.done == false);
      if (!this.filterDone) {
        this.originalTodos = this.todos;
        this.todos = filteredTodos;
      } else {
        this.todos = this.originalTodos;
      }
      this.filterDone = !this.filterDone;
    },
    async fetchTodos() {
      const res = await fetch("http://localhost:3001/todos");
      const data = await res.json();
      return data;
    },
    async fetchTodo(id) {
      const res = await fetch(`http://localhost:3001/todos/${id}`);
      const data = await res.json();
      return data;
    }
  },
  async created() {
    this.todos = await this.fetchTodos();
  }
};
</script>

<style lang="scss">
@import "@/assets/_shared.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
  margin-top: 60px;
  box-sizing: border-box;
  padding: 5px;
}
</style>
