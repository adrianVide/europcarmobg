<template>
  <div :class="[todo.done ? 'card--done' : null]" class="card">
    <div class="card--top">
      <div class="card--image--container">
        <img
          class="card--image"
          :src="`https://loremflickr.com/150/100/${todo.title}`"
          alt="a"
        />
      </div>
      <div class="card--top--right">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.body }}</p>
      </div>
    </div>
    <div>
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Title" />
        <input type="text" v-model="body" placeholder="Body" />
        <button class="button button--edit" type="submit" value="Edit Todo">
          Edit
        </button>
      </form>
    </div>
    <div class="button--container">
      <button class="button button--delete" @click="$emit('delete-todo', id)">
        DELETE
      </button>
      <button
        class="button button--done"
        :class="[todo.done ? 'button--done--actually' : null]"
        @click="$emit('done-toggler', id)"
      >
        {{ todo.done ? "Done" : "To be done" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object
  },
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      !this.title || !this.body ? alert("Don't leave it blank") : null;
      const payload = {
        title: this.title,
        body: this.body,
        id: this.todo.id
      };
      this.$emit("edit-todo", payload);
      this.title = "";
      this.body = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/_shared.scss";
h3 {
  margin: 0;
}
p {
  font-size: 12px;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  flex-direction: column;
  align-content: space-between;
  border-radius: 5px;
  opacity: 1;
  margin-bottom: 10px;
  min-height: 170px;
  &--done {
    box-shadow: none;

    opacity: 0.5;
  }
  &--top {
    display: flex;
    flex-direction: row;
    &--right {
      width: 100%;
    }
  }
  &--image--container {
    max-height: 33%;
  }
  &--image {
    object-fit: contain;
  }
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
.button {
  border-radius: 3px;
  color: white;
  border: none;
  margin: 0px 4px;
  width: 100%;
  &--delete {
    background-color: $delete;
    color: white;
  }
  &--done {
    border: 1px solid $done-color;
    color: $done-color;
    &--actually {
      background-color: $done-color;
      color: white;
    }
  }
  &--edit {
    width: 20%;
    color: $primary-color;
    border: 1px solid $primary-color;
  }
  &--container {
    display: flex;
    justify-content: space-evenly;
    margin: 5px 5px;
  }
}
</style>
