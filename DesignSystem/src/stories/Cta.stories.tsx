import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CTA, CTAProps } from "./Cta";

export default {
  title: "UI/CTA",
  component: CTA,
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args: CTAProps) => (
  <CTA {...args} />
);

export const Test = Template.bind({});

Test.args = {
  href: "#",
  text: "Something",
};
