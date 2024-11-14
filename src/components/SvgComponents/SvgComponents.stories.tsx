// smartRating.stories.tsx
import { StoryFn, Meta } from "@storybook/react";
import { BasicSvgInterface } from "./StaticProps.types";
import SvgBaseTemplate from "./SvgBaseTemplate";

export default {
  title: "ReactComponentLibrary/SvgBaseTemplate",
  component: SvgBaseTemplate,
} as Meta<typeof SvgBaseTemplate>;

const Template: StoryFn<typeof SvgBaseTemplate> = (args) => (
  <SvgBaseTemplate {...args} />
);

export const RatingTest = Template.bind({});
RatingTest.args = {
  fill: "primary",
  width: "100",
  height: "100",
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
  fill: "secondary",
};
