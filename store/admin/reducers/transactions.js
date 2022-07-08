import { transactionsState } from '../initialStates';
import { GET_TRANSACTIONS_SUCCESS } from '../actions/actionTypes';

const reducer = (state = transactionsState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS:
      const {
        totalTransactions,
        eventTicketTransactions,
        raffleTicketTransactions,
        liveStreamTransactions,
        progressiveTokenTransaction,
        transactions,
        totalPages,
      } = action.payload;
      return {
        ...state,
        totalSales: totalTransactions,
        eventTickets: eventTicketTransactions,
        raffleTickets: raffleTicketTransactions,
        totalPages,
        progressiveToken: progressiveTokenTransaction,
        liveSession: liveStreamTransactions,
        transactions,
      };
    default:
      return state;
  }
};

export default reducer;
