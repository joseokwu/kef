import { eventsState } from '../initialStates';
import { GET_EVENTS, GET_SINGLE_EVENT } from '../actions/actionTypes';

const reducer = (state = eventsState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      const { events } = action.payload;
      return {
        ...state,
        events,
      };
    case GET_SINGLE_EVENT:
      return {
        ...state,
        singleEvent: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
