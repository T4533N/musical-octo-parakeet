import { Button } from '@chakra-ui/react';
import React, { FC, HTMLAttributes, ReactChild } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from '../src/menu/menu';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Test: FC<Props> = ({ children }) => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<PhoneIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
