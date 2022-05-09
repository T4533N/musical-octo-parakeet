import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args: Props) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Default.args = {
  children: 'Secondary button dis one',
  variant: 'secondary',
};
