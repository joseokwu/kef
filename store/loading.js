const initialState = {
  isLoading: false,
};

// Reducer

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggleLoading": {
      return { ...state, isLoading: !state.isLoading };
    }
    default:
      return { ...state };
  }
};

// Selectors
export const getLoading = (state) => {
  return state.loading.isLoading;
};

// Actions
export const toggleLoading = () => {
  return { type: "toggleLoading" };
};
