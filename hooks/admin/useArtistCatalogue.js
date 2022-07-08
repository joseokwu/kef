import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { artistCatalogueCreators } from '../../store/admin/actions';

const useArtistCatalogue = () => {
  const dispatch = useDispatch();
  const stateArtistCatalogue = useSelector(
    (state) => state.adminArtistCatalogue
  );

  const { getArtistCatalogue } = bindActionCreators(
    artistCatalogueCreators,
    dispatch
  );

  return {
    stateArtistCatalogue,
    getArtistCatalogue,
  };
};

export default useArtistCatalogue;
