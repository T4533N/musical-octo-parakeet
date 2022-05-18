import { useStyles, HTMLChakraProps, forwardRef } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { cx } from '@chakra-ui/utils';
import React from 'react';

interface MenuButtonProps extends HTMLChakraProps<'button'> {}

const StyledSelectOption = forwardRef<MenuButtonProps, 'button'>(
  (props, ref) => {
    const styles = useStyles();
    return (
      <chakra.button
        ref={ref}
        {...props}
        __css={{
          display: 'inline-flex',
          appearance: 'none',
          alignItems: 'center',
          outline: 0,
          ...styles.button,
        }}
      />
    );
  }
);

/**
 * The trigger for the menu list. Must be a direct child of `Menu`.
 */
export const Option = forwardRef<MenuButtonProps, 'button'>((props, ref) => {
  const { children, as: As, ...rest } = props;

  // const buttonProps = useMenuButton(rest, ref);

  const Element = As || StyledSelectOption;

  return (
    <Element
      // {...buttonProps}
      className={cx('chakra-menu__menu-button', props.className)}
    >
      <chakra.span __css={{ pointerEvents: 'none', flex: '1 1 auto', minW: 0 }}>
        {props.children}
      </chakra.span>
    </Element>
  );
});
