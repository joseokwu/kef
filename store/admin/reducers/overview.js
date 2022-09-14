import { overviewState } from '../initialStates';
import { GET_OVERVIEW } from '../actions/actionTypes';

const reducer = (state = overviewState, action) => {
  switch (action.type) {
    case GET_OVERVIEW:
      console.log(state);
      const {
        eventsCreated,
        raffleTicketsParticipated,
        raffleTicketsPurchased,
        raffleTicketsWon,
        rafflesCompleted,
        totalAmountSold,
        totalTicketsSold,
        totalVendorTransactions,
        vendors,
        totalUser,

        eventTicketTransactions,

        liveStreamTransactions,
        progressiveTokenTransaction,
        raffleTicketTransactions,

        totalArtists,
        totalCatalogue,
        totalJoinedToday,

        totalTransactions,
      } = action.payload;
      return {
        ...state,
        eventsCreated,
        raffleTicketsParticipated,
        raffleTicketsPurchased,
        raffleTicketsWon,
        rafflesCompleted,
        totalAmountSold,
        totalTicketsSold,
        totalVendorTransactions,
        vendors,
        totalUser,

        eventTicketTransactions,

        liveStreamTransactions,
        progressiveTokenTransaction,
        raffleTicketTransactions,

        totalArtists,
        totalCatalogue,
        totalJoinedToday,

        totalTransactions,
      };
    default:
      return state;
  }
};

export default reducer;
