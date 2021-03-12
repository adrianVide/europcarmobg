import { shallowMount } from "@vue/test-utils";
import AddTodo from "@/components/AddTodo.vue";

describe("AddTodo.vue", () => {
  it("Renders the form to add a Todo (Title, Body and button)", () => {
    const title = "Todo Title";
    const body = "Todo Body";
    const button = "Add Todo";
    const wrapper = shallowMount(AddTodo);
    expect(wrapper.html()).toContain(title);
    expect(wrapper.html()).toContain(body);
    expect(wrapper.html()).toContain(button);
  });
});
