import React from 'react';
import { Story, Meta } from '@storybook/react';
import RawFigure, { Props } from './index';

export default {
  title: 'RawFigure',
  component: RawFigure
} as Meta;

const Template: Story<Props> = (args) => <RawFigure {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
