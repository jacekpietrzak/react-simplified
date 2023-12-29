import { useEffect, useState } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  const controller = new AbortController();

  useEffect(() => {
    setData(undefined);
    setIsError(null);
    setIsLoading(true);

    fetch(url, { ...options, signal: controller.signal })
      .then((res) => {
        if (res.status !== 200) return Promise.reject(res);
        return res.json();
      })
      .then(setData)
      .catch((e) => {
        if (e?.name === 'AbortError') return;
        setIsError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
}
