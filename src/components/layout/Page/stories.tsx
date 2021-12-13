import React from 'react';
import { Story, Meta } from '@storybook/react';
import Page, { Props } from './index';

export default {
  title: 'Page',
  component: Page
} as Meta;

const Template: Story<Props> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'ページタイトル',
  description: '',
  header: <p>ヘッダー</p>,
  footer: <p>フッター</p>,
  children: <p>子要素</p>
};
