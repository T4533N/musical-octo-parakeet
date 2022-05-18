import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select from '../src/select';

const meta: Meta<any> = {
  title: 'Design System/Select',
  component: Select,
};

export default meta;

const Template: Story<any> = (args) => <Select {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Primary: any = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
