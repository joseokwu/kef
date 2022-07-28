import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { overviewCreators } from '../../store/admin/actions';

const useOverview = () => {
  const dispatch = useDispatch();
  const stateOverview = useSelector((state) => state.adminOverview);

  const { getOverview } = bindActionCreators(overviewCreators, dispatch);

  return {
    stateOverview,
    getOverview,
  };
};

export default useOverview;
