import { vendorsState } from '../initialStates';
import { GET_SINGLE_VENDOR, GET_VENDORS } from '../actions/actionTypes';

const reducer = (state = vendorsState, action) => {
  switch (action.type) {
    case GET_VENDORS:
      return {
        ...state,
        getVendorsData: action.payload,
      };
    case GET_SINGLE_VENDOR:
      return {
        ...state,
        singleVendorData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
