import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import SnackbarReducer from "./snackbar";

const store = createStore(combineReducers({ snackbar: SnackbarReducer }));

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
