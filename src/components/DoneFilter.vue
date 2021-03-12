<template>
  <div>
    <button
      @click="onClick()"
      :style="{ background: backgroundColor, color: color }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DoneFilter",
  props: {
    text: String,
    backgroundColor: String,
    color: String,
    filterDone: { Boolean, default: false }
  },
  methods: {
    onClick() {
      this.$emit("filter-done-toggle");
    }
  }
};
</script>
<style scoped>
button {
  padding: 20px;
  border: none;
}
</style>
