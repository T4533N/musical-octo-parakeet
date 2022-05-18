import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Test, Props } from '../src/Test';

const meta: Meta = {
  title: 'Design System/Test',
  component: Test,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Test {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
