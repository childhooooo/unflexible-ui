import React from 'react';
import { Story, Meta } from '@storybook/react';
import Stacked, { Props } from './index';

export default {
  title: 'Stacked',
  component: Stacked
} as Meta;

const Template: Story<Props> = (args) => <Stacked {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
