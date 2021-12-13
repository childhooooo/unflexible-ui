import React from 'react';
import { Story, Meta } from '@storybook/react';
import Wrap, { Props } from './index';

export default {
  title: 'Wrap',
  component: Wrap
} as Meta;

const Template: Story<Props> = (args) => <Wrap {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
