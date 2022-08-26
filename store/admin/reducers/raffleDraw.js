import { raffleState } from '../initialStates';
import {
  SET_AUTO_PAGE,
  SET_FULLSCREEN,
  GET_RAFFLE_DRAW,
  GET_PROGRESSIVE_DRAW_DETAILS,
  GET_ACTIVE_DRAWS,
} from '../actions/actionTypes';

const reducer = (state = raffleState, action) => {
  switch (action.type) {
    case SET_AUTO_PAGE:
      return { ...state, autoPage: action.payload };
    case GET_RAFFLE_DRAW:
      const { campaigns, campaignsCreated, raffleDrawCompleted, totalPages } =
        action.payload;
      return {
        ...state,
        campaigns,
        raffleDrawCompleted,
        campaignsCreated,
        totalPages,
      };
    case GET_PROGRESSIVE_DRAW_DETAILS:
      const progressiveDrawDetails = action.payload;
      return {
        ...state,
        progressiveDrawDetails,
      };
    case GET_ACTIVE_DRAWS:
      const activeDrawDetails = action.payload;
      return {
        ...state,
        activeDrawDetails,
      };
    case SET_FULLSCREEN:
      return { ...state, fullScreen: action.payload };
    default:
      return state;
  }
};

export default reducer;
