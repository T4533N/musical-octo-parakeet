import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = ['select', 'trigger', 'option'];

const CustomSelect: ComponentStyleConfig = {
  parts,
  baseStyle: {
    select: {
      maxWidth: '322',
    },
    trigger: {},
    option: {},
  },
  sizes: {
    sm: {
      item: {
        fontSize: '0.75rem',
        px: 2,
        py: 1,
      },
    },
    md: {
      item: {
        fontSize: '0.875rem',
        px: 3,
        py: 2,
      },
    },
  },
  variants: {
    bold: {
      item: {
        fontWeight: 'bold',
      },
      menu: {
        boxShadow: 'xl',
      },
    },
    colorful: {
      item: {
        color: 'orange.600',
      },
      menu: {
        bg: 'orange.100',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};

export default CustomSelect;
