import { shallowMount } from "@vue/test-utils";
import DoneFilter from "@/components/DoneFilter.vue";

describe("DoneFilter.vue", () => {
  it("Renders the button with text from props", () => {
    const text = "test text";
    const wrapper = shallowMount(<DoneFilter text={text} />);
    expect(wrapper.text()).toMatch(text);
  });
});
