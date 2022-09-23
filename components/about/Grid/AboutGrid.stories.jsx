import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutGrid from './AboutGrid';
import { mockBaseTemplateProps } from './AboutGrid.mocks';

export default {
  title: 'components/about/GridComponent',
  component: AboutGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} 

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <AboutGrid {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
}