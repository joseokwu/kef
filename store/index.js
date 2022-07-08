import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AlertReducer } from './alert';
import { LoadingReducer } from './loading';
import { PageReducer } from './pages';
import SnackbarReducer from './snackbar';
import { AuthReducer } from './user';
import adminAuthReducer from './admin/reducers/auth';
import adminUsersReducer from './admin/reducers/users';
import adminRaffleDrawReducer from './admin/reducers/raffleDraw';
import adminTransactionsReducer from './admin/reducers/transactions';
import adminEventsReducer from './admin/reducers/events';
import adminArtistCatalogueReducer from './admin/reducers/artistCatalogue';
import adminCardsReducer from './admin/reducers/cards';

const store = createStore(
  combineReducers({
    snackbar: SnackbarReducer,
    alert: AlertReducer,
    auth: AuthReducer,
    page: PageReducer,
    loading: LoadingReducer,
    adminAuth: adminAuthReducer,
    adminUsers: adminUsersReducer,
    adminRaffleDraw: adminRaffleDrawReducer,
    adminTransactions: adminTransactionsReducer,
    adminEvents: adminEventsReducer,
    adminArtistCatalogue: adminArtistCatalogueReducer,
    adminCards: adminCardsReducer,
  }),
  applyMiddleware(thunk)
);

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
