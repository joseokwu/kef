import { cardsState } from '../initialStates';
import { GET_CARDS_SUCCESS } from '../actions/actionTypes';

const reducer = (state = cardsState, action) => {
  switch (action.type) {
    case GET_CARDS_SUCCESS:
      const { newCardRequest, totalCardRequest, cards, totalPages } =
        action.payload;
      return {
        ...state,
        totalCards: totalCardRequest,
        newCards: newCardRequest,
        totalPages,
        cards,
      };
    default:
      return state;
  }
};

export default reducer;
