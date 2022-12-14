export const authState = {
  user: false,
  activePage: 'Overview',
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
  campaigns: [],
  drawHistoryRepo: 0,
  totalCampaign: 0,
  totalProgressiveDraw: 0,
  raffleDrawCompleted: 0,
  campaignsCreated: 0,
  totalPages: 0,
  fullScreen: false,
  progressiveDrawDetails: {
    totalSubscribers: 0,
    raffleWinners: 0,
    raffleDrawsCompleted: 0,
  },
  activeDrawDetails: {
    campaignDetail: { typeOfDraw: '' },
    cycles: 0,
    draw: '0/0',
    iterations: [],
    nextTime: '',
  },
};

export const vendorsState = {
  getVendorsData: {},
  singleVendorData: {
    branches: [],
    vendorBranchCount: 0,
    vendorLogo: '',
    vendorName: '',
    vendorTotalTransaction: 0,
  },
};

export const referralsState = {
  referralData: {
    celebrities: [],
    totalCelebrities: 0,
    totalMintTicket: 0,
    totalSignUps: 0,
  },
  referralData: {},
  referralLink: {},
};

export const eventsState = {
  events: [],
  singleEvent: [],
};

export const artistCatalogueState = {
  totalArtists: 0,
  totalCatalogue: 0,
  artists: [],
  totalPages: 1,
  page: 1,
  singleCatalogue: [],
};

export const cardsState = {
  totalCards: 0,
  newCards: 0,
  cards: [],
  totalPages: 1,
  page: 1,
};

export const overviewState = {
  eventsCreated: 0,
  raffleTicketsParticipated: 0,
  raffleTicketsPurchased: 0,
  raffleTicketsWon: 0,
  rafflesCompleted: 0,
  totalAmountSold: 0,
  totalTicketsSold: 0,
  totalVendorTransactions: 0,
  vendors: 0,
  totalUser: 0,

  eventTicketTransactions: 0,

  liveStreamTransactions: 0,
  progressiveTokenTransaction: 0,
  raffleTicketTransactions: 0,

  totalArtists: 0,
  totalCatalogue: 0,
  totalJoinedToday: 0,

  totalTransactions: 0,
  totalUser: 0,
};
