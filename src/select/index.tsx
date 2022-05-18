import {
  Box,
  Button,
  Divider,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useOutsideClick,
  VStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelect } from './use-select';

import useAutoComplete from './use-autocomplete';
import boldQuery from './bold-string';
import { CheckIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';

export const list = [
  {
    name: 'Capsicum',
  },
  {
    name: 'Paneer',
  },
  {
    name: 'Red Paprika',
  },
  {
    name: 'Onions',
  },
  {
    name: 'Extra Cheese',
  },
  {
    name: 'Extra',
  },
  {
    name: 'Cheese',
  },
  {
    name: 'Extra Whatever',
  },
  {
    name: 'Dis Is Unique',
  },
];

const Select = ({ isButton }) => {
  const {
    index,
    setIndex,
    item,
    setItem,
    inputValue,
    setInputValue,
    setFocused,
    focused,
    onBlur,
    onFocus,
    custom,
  } = useSelect(list, null);
  const initialFocusRef = React.useRef<HTMLInputElement>(null);

  const [suggestions] = useAutoComplete({
    data: list,
    value: inputValue,
    sortBy: 'name',
  });

  useOutsideClick({
    ref: initialFocusRef,
    handler: () => setFocused(false),
  });

  return (
    <Box maxW="322">
      <Popover
        initialFocusRef={initialFocusRef}
        returnFocusOnClose={false}
        isOpen={focused}
        closeOnBlur={false}
        isLazy
        lazyBehavior="keepMounted"
        placement="bottom-start"
      >
        <PopoverTrigger>
          <InputGroup size="md">
            <Input
              onBlur={onBlur}
              onFocus={onFocus}
              ref={initialFocusRef}
              justifyContent="space-between"
              type={isButton ? 'button' : 'text'}
              as={isButton ? Button : Input}
              value={inputValue}
              onChange={(e: any) => {
                setInputValue(e.target.value);
              }}
              placeholder="Choose an item"
              size="md"
              children={isButton ? item.name : null}
            />

            <InputRightElement width="4.5rem" color="gray.400">
              <Button
                size="sm"
                onClick={() => {
                  setIndex(null);
                  setInputValue('');
                }}
                variant="unstyled"
              >
                <Icon as={CloseIcon} w={2.5} h={2.5} />
              </Button>
              <Divider height="70%" orientation="vertical" />
              <Button size="sm" onClick={() => {}} variant="unstyled">
                <Icon as={ChevronDownIcon} w={6} h={6} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent maxH={300} overflowY="auto" overflowX="auto">
          <PopoverBody p={0} m={0}>
            <VStack spacing="3px">
              {suggestions.length > 0 ? (
                suggestions.map((listItem: any, listIndex: any) => {
                  const isSelected = listIndex === index;

                  const isNotSearching =
                    inputValue.toLowerCase() === item?.name.toLowerCase();

                  const text = isNotSearching
                    ? listItem.name
                    : boldQuery(listItem.name, inputValue);

                  return (
                    <Button
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      paddingLeft={4}
                      paddingRight={4}
                      textAlign={'left'}
                      display="flex"
                      justifyContent="space-between"
                      rounded={0}
                      variant={'unstyled'}
                      backgroundColor={isSelected ? 'gray.50' : 'white'}
                      id={listItem.name}
                      onClick={() => {
                        setItem(listItem);
                        setInputValue(listItem.name);
                        // setFocused(true);
                      }}
                      w={'100%'}
                    >
                      <Box dangerouslySetInnerHTML={{ __html: text }} />
                      {isSelected && <Icon as={CheckIcon} />}
                    </Button>
                  );
                })
              ) : (
                <Box w="100%" justifyContent="flex-start">
                  <Text px={4} py={2}>
                    No Matching Options
                  </Text>
                  <Button
                    w="full"
                    rounded={0}
                    backgroundColor="gray.50"
                    variant="unstyled"
                    paddingLeft={4}
                    paddingRight={4}
                    textAlign="left"
                    onClick={() => {
                      setItem(inputValue);
                    }}
                  >
                    Create "{`${inputValue}`}"
                  </Button>
                </Box>
              )}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default Select;

// https://www.lekoarts.de/react/how-to-build-an-advanced-multipart-component-with-chakra-ui#creating-multicontainer
// https://www.npmjs.com/package/use-ref-map
// https://www.robinwieruch.de/react-scroll-to-item/

// function goToG1(id: any) {
//   // @ts-ignore
//   document.getElementById(id).scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   });
// }
