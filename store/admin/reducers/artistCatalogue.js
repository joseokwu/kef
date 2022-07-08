import { artistCatalogueState } from '../initialStates';
import { GET_ARTIST_CATALOGUE_SUCCESS } from '../actions/actionTypes';

const reducer = (state = artistCatalogueState, action) => {
  switch (action.type) {
    case GET_ARTIST_CATALOGUE_SUCCESS:
      const { totalArtists, totalJoinedToday, artists, totalPages } =
        action.payload;
      return {
        ...state,
        totalArtists,
        artistsJoinedToday: totalJoinedToday,
        totalPages,
        artists,
      };
    default:
      return state;
  }
};

export default reducer;
