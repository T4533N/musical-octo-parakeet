import React from 'react';
import theme from '../lib/theme';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  chakra: {
    theme,
  },
  controls: { expanded: true },
  // layout: 'centered',
};

// export const decorators = [
//   (Story) => (
//     <ChakraProvider theme={theme}>
//       <CSSReset />
//       <Story />
//     </ChakraProvider>
//   ),
// ];
