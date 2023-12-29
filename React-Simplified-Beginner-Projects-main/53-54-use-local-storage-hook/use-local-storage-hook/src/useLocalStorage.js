import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  // const localValue = JSON.parse(localStorage.getItem(key));
  // const [value, setValue] = useState(
  //   localValue === null ? initialValue : localValue
  // );
  const [value, setValue] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue == null) {
      if (typeof initialValue === 'function') {
        return initialValue();
      } else {
        return initialValue;
      }
    } else {
      return localValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}
