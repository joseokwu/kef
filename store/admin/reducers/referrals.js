import { referralsState } from '../initialStates';
import { ADD_REFERRAL, GET_REFERRALS } from '../actions/actionTypes';

const reducer = (state = referralsState, action) => {
  switch (action.type) {
    case GET_REFERRALS:
      return {
        ...state,
        referralData: action.payload,
      };
    case ADD_REFERRAL:
      return {
        ...state,
        referralLink: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
