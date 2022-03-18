const initialState = {
  open: false,
  status: "success",
  message: "Default Message",
  duration: 0,
};

export const AlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "alert/toggle":
      return { ...state, open: action.open, status: action.status, message: action.message, duration: action.duration };
    default:
      return { ...state };
  }
};

// Action creators
export const toggleAlert = (status = " ", message = " ", open = false, duration = 3000) => {
  return { type: "alert/toggle", message: message, status: status, open: open, duration: duration };
};
