import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AlertReducer } from "./alert";
import { LoadingReducer } from "./loading";
import { PageReducer } from "./pages";
import SnackbarReducer from "./snackbar";
import { AuthReducer } from "./user";

const store = createStore(combineReducers({ snackbar: SnackbarReducer, alert: AlertReducer, auth: AuthReducer, page: PageReducer, loading: LoadingReducer }), applyMiddleware(thunk));

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
