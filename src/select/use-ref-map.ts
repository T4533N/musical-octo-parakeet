import { useRef } from 'react';

const refMap = new Map();

const getRef = (key: any) => {
  return refMap.get(key);
};

const setRef = (key: any, initialValue = null) => {
  const ref = useRef(initialValue);
  refMap.set(key, ref);
  return ref;
};

const useRefMap = () => {
  return {
    getRef,
    setRef,
    refMap,
  };
};

export default useRefMap;
