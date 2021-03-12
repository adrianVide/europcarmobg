import { shallowMount } from "@vue/test-utils";
import Todos from "@/components/Todos.vue";
import Todo from "@/components/Todo.vue";

describe("Todos.vue", () => {
  it("Renders childre and the right number of them", () => {
    const todos = [
      { id: 1, title: "test 1", body: "test 1", done: false },
      { id: 2, title: "test 2", body: "test 2", done: false }
    ];
    const wrapper = shallowMount(<Todos todos={todos} />);
    expect(wrapper.findComponent(Todo).exists()).toBe(true);
    expect(wrapper.findAllComponents(Todo).length).toBe(2);
  });
});
