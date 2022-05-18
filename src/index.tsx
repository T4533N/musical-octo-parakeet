import { Box, Button, useDisclosure, usePopper } from '@chakra-ui/react';
import { ChakraComponent } from '@chakra-ui/system';
import { callAll, cx, runIfFn, __DEV__ } from '@chakra-ui/utils';
import {
  AnimatePresence,
  CustomDomComponent,
  motion,
  Variants,
} from 'framer-motion';
import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { useSelect } from './select/use-select';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */

const Shit = () => {
  const { isOpen, onToggle } = useSelect([], null);

  return <button onClick={onToggle}>Toggle</button>;
};

export const Thing: FC<Props> = ({ children }) => {
  // 2. Create toggle state

  const { isOpen, onToggle } = useSelect([], null);

  // 4. Consume the `usePopper` hook
  // const { getPopperProps, getReferenceProps, getArrowProps, transformOrigin } =
  //   usePopper({
  //     placement: 'bottom-start',
  //   });

  // const { isOpen, onToggle } = useDisclosure();
  // 3. Create motion variants
  const slide: Variants = {
    enter: {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      transitionEnd: {
        visibility: 'hidden',
      },
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.1,
        easings: 'easeOut',
      },
    },
  };

  return (
    <>
      <Shit />
      <div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              transition={{
                type: 'spring',
                duration: 0.2,
              }}
              variants={slide}
              initial="exit"
              animate="enter"
              exit="exit"
              style={{
                background: 'red',
                width: 200,
                // transformOrigin,
                borderRadius: 4,
              }}
            >
              Testing
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
