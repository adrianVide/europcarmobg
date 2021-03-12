<template>
  <div class="form--container">
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Todo Title" />
      <input type="text" v-model="body" placeholder="Todo Body" />
      <button type="submit" value="Add Todo">Add Todo</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      body: "",
      done: false
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      !this.title || !this.body ? alert("Add a Todo") : null;
      const newTodo = {
        title: this.title,
        body: this.body,
        done: false
      };
      console.log(newTodo);
      this.$emit("add-todo", newTodo);
      this.title = "";
      this.body = "";
      this.done = false;
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/_shared.scss";
button {
  border-radius: 3px;
  color: white;
  border: none;
  margin: 0px 4px;
  width: 100%;
  width: 20%;
  color: $primary-color;
  border: 1px solid $primary-color;
}
input[type="text"] {
  width: 29%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid $primary-color;
}
form {
  display: flex;
  justify-content: space-around;
}
.form--container {
  margin: 50px 10%;
}
</style>
