import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select, { Props } from '../src';

const meta: Meta = {
  title: 'Design System/Select',
  component: Select,

  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Select {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Primary: any = Template.bind({});
Primary.args = {
  isButton: true,
  isClearable: true,
  // data: list,
  placement: 'bottom-start',
  isLazy: true,
  lazyBehavior: 'keepMounted',
  closeOnBlur: false,
  returnFocusOnClose: false,
  popoverStyles: {
    maxHeight: '300px',
  },
  inputProps: {
    size: 'md',
    placeholder: 'Choose an item',
  },
  listProps: {
    paddingLeft: '4',
    paddingRight: '4',
    textAlight: 'left',
    width: '100%',
    rounded: 0,
    variant: 'unstyled',
  },
  isDisabled: false,
};

export const Combobox = Template.bind({});
Combobox.args = {
  isButton: false,
  isClearable: true,
  // data: list,
  placement: 'bottom-start',
  isLazy: true,
  lazyBehavior: 'keepMounted',
  closeOnBlur: false,
  returnFocusOnClose: false,
  popoverStyles: {
    maxHeight: '300px',
  },
  inputProps: {
    size: 'md',
    placeholder: 'Choose an item',
  },
  listProps: {
    paddingLeft: '4',
    paddingRight: '4',
    textAlight: 'left',
    width: '100%',
    rounded: 0,
    variant: 'unstyled',
  },
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isButton: false,
  isClearable: true,
  // data: list,
  placement: 'bottom-start',
  isLazy: true,
  lazyBehavior: 'keepMounted',
  closeOnBlur: false,
  returnFocusOnClose: false,
  popoverStyles: {
    maxHeight: '300px',
  },
  inputProps: {
    size: 'md',
    placeholder: 'Choose an item',
  },
  listProps: {
    paddingLeft: '4',
    paddingRight: '4',
    textAlight: 'left',
    width: '100%',
    rounded: 0,
    variant: 'unstyled',
  },
  isDisabled: true,
};

export const Colors = Template.bind({});
Colors.args = {
  isButton: false,
  isClearable: true,
  // data: list,
  placement: 'bottom-start',
  isLazy: true,
  lazyBehavior: 'keepMounted',
  closeOnBlur: false,
  returnFocusOnClose: false,
  popoverStyles: {
    maxHeight: '300px',
  },
  inputProps: {
    size: 'md',
    placeholder: 'Choose an item',
    backgroundColor: '#000000',
  },
  listProps: {
    paddingLeft: '4',
    paddingRight: '4',
    textAlight: 'left',
    width: '100%',
    rounded: 0,
    variant: 'unstyled',
  },
  isDisabled: false,
};

export const Flushed = Template.bind({});
Flushed.args = {
  isButton: false,
  isClearable: true,
  // data: list,
  placement: 'bottom-start',
  isLazy: true,
  lazyBehavior: 'keepMounted',
  closeOnBlur: false,
  returnFocusOnClose: false,
  popoverStyles: {
    maxHeight: '300px',
  },
  inputProps: {
    size: 'md',
    placeholder: 'Choose an item',
    variant: 'flushed',
  },
  listProps: {
    paddingLeft: '4',
    paddingRight: '4',
    textAlight: 'left',
    width: '100%',
    rounded: 0,
    variant: 'unstyled',
  },
  isDisabled: false,
};
