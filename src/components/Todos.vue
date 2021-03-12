<template>
  <div class="todos--container">
    <div v-for="todo in todos" :key="todo.id">
      <Todo
        @done-toggler="$emit('done-toggler', todo.id)"
        @delete-todo="$emit('delete-todo', todo.id)"
        @edit-todo="passPayload"
        :todo="todo"
      />
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "Todos",
  props: {
    todos: Array
  },
  components: {
    Todo
  },
  data() {
    return {
      payload: []
    };
  },
  methods: {
    passPayload(payload) {
      this.$emit("edit-todo", payload);
    }
  },
  emits: ["delete-todo", "done-toggler", "edit-todo"]
};
</script>
<style scoped>

.todos--container {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: unset;
  margin: 30px 0px;
  column-count: 1;
}
@media only screen and (min-width: 768px) {
  .todos--container {
    column-count: 2;
  }
  @media only screen and (min-width: 768px) {
    .todos--container {
      margin: 50px 10%;
    }
  }
}
</style>
