import { useCallback, useState } from 'react';

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  // we will use useCallback. It is for memoizing functions so they are not recreated while rerendering. This would be a problem if we use our hook in useEffect as dependecie because useEffect will think that this is new function each time component rerenders.

  const push = useCallback((element) => {
    setArray((currentArray) => {
      return [...currentArray, element];
    });
  }, []);

  const replace = useCallback((index, element) => {
    setArray((currentArray) => {
      return currentArray.toSpliced(index, 1, element);
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((currentArray) => {
      return currentArray.filter(callback);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((currentArray) => {
      return currentArray.filter((e, i) => i !== index);
    });
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  return {
    array,
    set: setArray,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
  };
}
