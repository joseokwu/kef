import { artistCatalogueState } from '../initialStates';
import {
  GET_ARTIST_CATALOGUE_SUCCESS,
  GET_SINGLE_CATALOGUE,
} from '../actions/actionTypes';

const reducer = (state = artistCatalogueState, action) => {
  switch (action.type) {
    case GET_ARTIST_CATALOGUE_SUCCESS:
      const { totalArtists, totalCatalogue, artists, totalPages } =
        action.payload;
      return {
        ...state,
        totalArtists,
        totalCatalogue,
        totalPages,
        artists,
      };
    case GET_SINGLE_CATALOGUE:
      action.payload;
      return {
        ...state,
        singleCatalogue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
