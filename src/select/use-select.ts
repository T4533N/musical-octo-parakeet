import { useCallback, useState } from 'react';

type SelectHandler<T> = {
  index: number | null;
  item: T;
  setIndex: (newIndex: number) => void;
  setItem: (newItem: any) => void;
  custom: any;
  inputValue: any;
  setInputValue: any;
  focused: boolean;
  setFocused: any;
  onFocus: any;
  onBlur: any;
};

/**
 * useSelect hook
 * Helps easily select a value from a list of values
 *
 * @param list List of values to select a value from
 * @param [initialIndex=0] Initial index which is selected
 * @returns handler
 */
function useSelect<T>(list: T[], initialIndex: number = 0): SelectHandler<T> {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [custom, setCustom] = useState<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const setItem = useCallback(
    (item: T | any) => {
      list.indexOf(item) !== -1
        ? setSelectedIndex(list.indexOf(item))
        : setCustom(item);
    },
    [list]
  );

  return {
    index: selectedIndex,
    item: list[selectedIndex],
    setIndex: setSelectedIndex,
    setItem,
    custom,
    inputValue,
    setInputValue,
    focused,
    setFocused,
    onFocus,
    onBlur,
  };
}

export { useSelect };
