import { vendorsState } from '../initialStates';
import { GET_VENDORS } from '../actions/actionTypes';

const reducer = (state = vendorsState, action) => {
  switch (action.type) {
    case GET_VENDORS:
      return {
        ...state,
        getVendorsData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
