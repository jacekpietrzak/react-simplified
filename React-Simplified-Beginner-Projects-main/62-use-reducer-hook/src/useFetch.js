import { useEffect, useReducer } from 'react';

const ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return { isError: false, isLoading: true };
    case ACTIONS.FETCH_SUCCESS:
      return {
        // ...state, - if we have more data in state we can use spread operator. Rightn ow we set all we have.
        data: action.payload.data,
        isLoading: false,
        isError: false,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        isError: true,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

const initialState = {
  isError: false,
  isLoading: true,
};

export function useFetch(url, options = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_START });

    const controller = new AbortController();

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { data } });
      })
      .catch((error) => {
        if (error.name === 'AbortError') return;
        dispatch({ type: ACTIONS.FETCH_ERROR, payload: { error: error } });
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}
