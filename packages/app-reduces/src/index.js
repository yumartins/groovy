/**
 * Module reducer.
 */
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'merge': {
      return {
        ...state,
        ...payload,
      };
    }
  }
};

export default reducer;
