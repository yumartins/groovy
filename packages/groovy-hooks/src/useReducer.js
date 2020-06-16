import { useReducer as _useReducer } from 'react';

/**
 * Abstraction on top of use reducer.
 */
const useReducer = (reducer, initial, init) => {
  const [state, _dispatch] = _useReducer(reducer, initial, init);

  const dispatch = (type, payload) => {
    _dispatch({
      type,
      payload,
    });
  };

  return [state, dispatch];
};

export default useReducer;
