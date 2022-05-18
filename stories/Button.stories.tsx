import React from 'react';
import { Meta, Story } from '@storybook/react';
// import { Button, ButtonProps } from '@chakra-ui/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Design System/Button',
  component: Button,
  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
};

export default meta;

const Template = (args: Props) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  colorScheme: 'teal',
  size: 'xs',
  variant: 'solid',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button dis one',
  variant: 'outline',
};
