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
import React from 'react';
import { useSelect } from './use-select';

import useAutoComplete from './utils/use-autocomplete';
import boldQuery from './utils/bold-string';
import { CheckIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';

export const list = [
  {
    name: 'Capsicum',
    price: 100,
  },
  {
    name: 'Paneer',
    price: 500,
  },
  {
    name: 'Red Paprika',
    price: 200,
  },
  {
    name: 'Onions',
    price: 300,
  },
  {
    name: 'Extra Cheese',
    price: 50,
  },
  {
    name: 'Coriander',
    price: 55,
  },
  {
    name: 'Brinjal',
    price: 60,
  },
  {
    name: 'Cabbage',
    price: 65,
  },
  {
    name: 'Tomato',
    price: 70,
  },
];

export interface Props {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  isButton?: boolean;
  isClearable?: boolean;
  buttonText?: any;
  data: any;
  sortBy: string;
  placement?: string;
  isLazy?: boolean;
  lazyBehavior?: string;
  closeOnBlur?: boolean;
  returnFocusOnClose?: boolean;
  inputProps?: any;
  popoverStyles?: any;
  listProps?: any;
  isDisabled?: boolean;
}

const Select = ({
  isButton = false,
  buttonText = 'name',
  isClearable = true,
  data = list,
  sortBy = 'name',
  placement = 'bottom-start',
  isLazy = true,
  lazyBehavior = 'keepMounted',
  closeOnBlur = false,
  returnFocusOnClose = false,
  popoverStyles = {
    maxHeight: '300px',
  },
  inputProps = {
    size: 'md',
    placeholder: 'Choose an item',
  },
  listProps = {
    paddingLeft: '4',
    paddingRight: '4',
    textAlight: 'left',
    width: '100%',
    rounded: 0,
    variant: 'unstyled',
  },
  isDisabled = false,
}: Props) => {
  const {
    // index,
    // custom,
    setIndex,
    item,
    setItem,
    inputValue,
    setInputValue,
    setFocused,
    focused,
    onBlur,
    onFocus,
  } = useSelect(list, 0);
  const initialFocusRef = React.useRef<HTMLInputElement>(null);

  const [suggestions] = useAutoComplete({
    data,
    value: inputValue,
    sortBy,
  });

  useOutsideClick({
    ref: initialFocusRef,
    handler: () => setFocused(false),
  });

  return (
    <Box maxW="322">
      <Popover
        initialFocusRef={initialFocusRef}
        returnFocusOnClose={returnFocusOnClose}
        isOpen={focused}
        closeOnBlur={closeOnBlur}
        isLazy={isLazy}
        // @ts-ignore
        lazyBehavior={lazyBehavior}
        // @ts-ignore
        placement={placement as string}
      >
        <PopoverTrigger>
          <InputGroup>
            <Input
              isDisabled={isDisabled}
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
              children={isButton ? item?.[buttonText] : null}
              {...inputProps}
            />

            <InputRightElement width="4.5rem" color="gray.400">
              {isClearable && (
                <Button
                  isDisabled={isDisabled}
                  size="sm"
                  onClick={() => {
                    setIndex(null);
                    setInputValue('');
                  }}
                  variant="unstyled"
                >
                  <Icon as={CloseIcon} w={2.5} h={2.5} />
                </Button>
              )}
              <Divider height="70%" orientation="vertical" />
              <Button size="sm" variant="unstyled" isDisabled={isDisabled}>
                <Icon as={ChevronDownIcon} w={6} h={6} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent overflowY="auto" overflowX="auto" {...popoverStyles}>
          <PopoverBody p={0} m={0}>
            <VStack spacing="3px">
              {suggestions.length > 0 ? (
                suggestions.map((listItem: any, listIndex: any) => {
                  const isSelected = listItem?.[sortBy] === item?.[sortBy];

                  const isNotSearching =
                    inputValue.toLowerCase() === item?.[sortBy].toLowerCase();

                  const text = isNotSearching
                    ? listItem?.[sortBy]
                    : boldQuery(listItem?.[sortBy], inputValue);

                  return (
                    <Button
                      {...listProps}
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      display="flex"
                      justifyContent="space-between"
                      backgroundColor={isSelected ? 'gray.50' : 'white'}
                      id={listIndex}
                      onClick={() => {
                        setItem(listItem);
                        setInputValue(listItem?.name);
                        // setFocused(true);
                      }}
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
