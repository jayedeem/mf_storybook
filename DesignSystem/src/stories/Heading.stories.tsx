import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading, IHeading } from "./Heading";

export default {
  title: "UI/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args: IHeading) => (
  <Heading {...args} />
);

export const Test = Template.bind({});

Test.args = {
  heading: "Header",
};
