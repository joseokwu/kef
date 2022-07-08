import { eventsState } from '../initialStates';
import {
  GET_SINGLE_EVENT_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
} from '../actions/actionTypes';

const reducer = (state = eventsState, action) => {
  switch (action.type) {
    case GET_SINGLE_EVENT_SUCCESS:
      const { totalEventTicketSold, vipTicketSold, regularTicketSold } =
        action.payload;
      return {
        ...state,
        overallTotalSales: totalEventTicketSold,
        // vipCategory: 0,
        // regularCategory: 0,
        totalSalesVip: vipTicketSold,
        totalSalesRegular: regularTicketSold,
        // purchasedTickets: 0,
        // wonTickets: 0,
      };
    default:
      return state;
  }
};

export default reducer;
