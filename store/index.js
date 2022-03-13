import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { PageReducer } from "./pages";
import SnackbarReducer from "./snackbar";
import { AuthReducer } from "./user";

const store = createStore(combineReducers({ snackbar: SnackbarReducer, auth: AuthReducer, page: PageReducer }), applyMiddleware(thunk));

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
