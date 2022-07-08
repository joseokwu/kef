import { raffleState } from '../initialStates';
import {
  GET_WEEKLY_DRAW_SETTINGS,
  GET_AUTOMATED_DRAW_SETTINGS_SUCCESS,
  SET_AUTO_PAGE,
  GET_WEEKLY_DRAW,
  GET_EVENT_DRAW_SETTINGS,
  GET_EVENT_DRAW,
} from '../actions/actionTypes';

const reducer = (state = raffleState, action) => {
  switch (action.type) {
    case SET_AUTO_PAGE:
      return { ...state, autoPage: action.payload };
    case GET_AUTOMATED_DRAW_SETTINGS_SUCCESS:
      return { ...state, automatedDrawSettings: action.payload };
    case GET_WEEKLY_DRAW_SETTINGS:
      return { ...state, weeklyDrawSettings: action.payload };
    case GET_WEEKLY_DRAW:
      return { ...state, weeklyDraw: action.payload };
    case GET_EVENT_DRAW_SETTINGS:
      return { ...state, eventDrawSettings: action.payload };
    case GET_EVENT_DRAW:
      return { ...state, eventDraw: action.payload };
    default:
      return state;
  }
};

export default reducer;
