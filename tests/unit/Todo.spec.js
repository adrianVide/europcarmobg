import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Todo.vue", () => {
  it("Renders each of the todos correctly¡", () => {
    const todo = { id: 1, title: "test title", body: "test body", done: false };
    const wrapper = shallowMount(<Todo todo={todo} />);
    expect(wrapper.text()).toMatch(todo.title);
    expect(wrapper.text()).toMatch(todo.body);
  });
});
