import { authState } from '../initialStates';
import { ADDNUMBERS } from '../actions/actionTypes';

const reducer = (state = authState, action) => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case ADDNUMBERS:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default reducer;
