// src/CustomDropdown.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomDropdown, { CustomDropdownProps } from "./CustomDropdown";

export default {
  title: "Components/CustomDropdown",
  component: CustomDropdown,
  tags: ["autodocs"],
} as Meta;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const customOptionRenderer = (option: any) => (
  <div style={{ color: "blue" }}>{option.label}</div>
);

const Template: StoryFn<CustomDropdownProps> = (args) => (
  <CustomDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options,
  isMulti: true,
  isSearchable: true,
  usePortal: false, // Default to false
  zIndex: 1001, // Default zIndex
  placeholder: "Select an option",
  customOptionRenderer,
  onOptionChange: (selected) => console.log("Selected options:", selected),
};

export const WithPortal = Template.bind({});
WithPortal.args = {
  ...Default.args,
  usePortal: true, // Enable portal
};

export const SingleSelection = Template.bind({});
SingleSelection.args = {
  ...Default.args,
  isMulti: false,
};

export const NoSearch = Template.bind({});
NoSearch.args = {
  ...Default.args,
  isSearchable: false,
};
