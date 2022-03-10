// Initial State
const initState = {
  open: false,
  message: "Default Message",
};

// Reducer

export default function SnackbarReducer(state = initState, action) {
  return { ...state, message: action?.payload?.message || " ", open: action?.payload?.open };
}

// Selectors
export function getStatus(state) {
  return state.snackbar.open;
}
export function getMessage(state) {
  return state.snackbar.message;
}

// Action Creators
export function toggleSnackbar({ open, message = " " }) {
  return {
    type: "toggle",
    payload: {
      message,
      open,
    },
  };
}
