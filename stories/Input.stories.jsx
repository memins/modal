import React from "react";
import "../styles/globals.css";
import Input from "../components/input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "scoutlin/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: { placeholder: "placeholder" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const scInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
scInput.args = {
  placeholder: "placeholder",
};
