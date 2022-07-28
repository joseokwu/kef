import { authState } from '../initialStates';
import { SET_ACTIVE_PAGE } from '../actions/actionTypes';

const reducer = (state = authState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    default:
      return state;
  }
};

export default reducer;
