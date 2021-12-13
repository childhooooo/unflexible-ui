import React from 'react';
import { Story, Meta } from '@storybook/react';
import RatioBlock, { Props } from './index';

export default {
  title: 'RatioBlock',
  component: RatioBlock
} as Meta;

const Template: Story<Props> = (args) => <RatioBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
