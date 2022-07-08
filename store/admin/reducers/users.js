import { usersState } from '../initialStates';
import { GET_USERS_SUCCESS } from '../actions/actionTypes';

const reducer = (state = usersState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      console.log(state);
      const { totalJoinedToday, totalUser, users, totalPages } = action.payload;
      return { ...state, totalJoinedToday, totalUser, users, totalPages };
    default:
      return state;
  }
};

export default reducer;
