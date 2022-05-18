import { anatomy } from '@chakra-ui/theme-tools';

export const menuAnatomy = anatomy('menu')
  .parts('button', 'list', 'item')
  .extend('groupTitle', 'command', 'divider');
