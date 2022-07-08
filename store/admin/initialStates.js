export const authState = {
  user: false,
  hhd: 'djdj',
};

export const usersState = {
  totalJoinedToday: 0,
  totalUser: 0,
  totalPages: 0,
  users: [],
};

export const transactionsState = {
  totalSales: 0,
  eventTickets: 0,
  raffleTickets: 0,
  progressiveToken: 0,
  liveSession: 0,
  transactions: [],
  totalPages: 1,
  page: 1,
};

export const raffleState = {
  autoPage: 'cards',
  automatedDrawSettings: {},
  weeklyDrawSettings: {},
  weeklyDraw: {},
  weeklyDrawBtn: false,
  eventDrawSettings: {},
  eventDraw: {},
  eventDrawBtn: false,
};

export const eventsState = {
  overallTotalSales: 0,
  vipCategory: 0,
  regularCategory: 0,
  totalSalesVip: 0,
  totalSalesRegular: 0,
  purchasedTickets: 0,
  wonTickets: 0,
};

export const artistCatalogueState = {
  totalArtists: 0,
  artistsJoinedToday: 0,
  artists: [],
  totalPages: 1,
  page: 1,
};

export const cardsState = {
  totalCards: 0,
  newCards: 0,
  cards: [],
  totalPages: 1,
  page: 1,
};
