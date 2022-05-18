import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import Meta, { Primary as PrimaryStory } from '../stories/Select.stories';

// Returns a component that already contain all decorators from story level, meta level and global level.
const Primary = composeStory(PrimaryStory, Meta);

// see if its rendering correctly
test('render correctly', () => {
  render(<Primary />);
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('option')).toBeVisible();
});

// https://cathalmacdonnacha.com/how-to-test-a-select-element-with-react-testing-library

// default selections
// Correct number of options
// Change selected option
