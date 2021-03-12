import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("Renders the header and title", () => {
    const headerTitle = "To-Do list";
    const wrapper = shallowMount(Header);
    expect(wrapper.text()).toMatch(headerTitle);
  });
});
