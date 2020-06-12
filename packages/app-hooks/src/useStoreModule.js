import { useMemo } from 'react';

/**
 * Hook to memoize store state.
 */
const useStoreModule = (state, actions, extra = {}) => useMemo(() => ({
  ...state,
  ...extra,

  /**
   * Call an action.
   */
  run (key, ...payload) {
    const action = actions[key];

    if (! action) {
      throw new Error(`Action ${key} not defined`);
    }

    return action(...payload);
  },
}), [state]);

export default useStoreModule;
