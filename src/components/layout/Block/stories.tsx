import React from 'react';
import { Story, Meta } from '@storybook/react';
import Block, { Props } from './index';

export default {
  title: 'Block',
  component: Block
} as Meta;

const Template: Story<Props> = (args) => <Block {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
