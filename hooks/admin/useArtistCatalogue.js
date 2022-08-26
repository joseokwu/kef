import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { artistCatalogueCreators } from '../../store/admin/actions';

const useArtistCatalogue = () => {
  const dispatch = useDispatch();
  const stateArtistCatalogue = useSelector(
    (state) => state.adminArtistCatalogue
  );

  const {
    getArtistCatalogue,
    getSingleCatalogue,
    togglePublish,
    getArtistCatalogue2,
  } = bindActionCreators(artistCatalogueCreators, dispatch);

  return {
    stateArtistCatalogue,
    getArtistCatalogue,
    getSingleCatalogue,
    togglePublish,
    getArtistCatalogue2,
  };
};

export default useArtistCatalogue;
