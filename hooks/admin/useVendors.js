import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { vendorsCreators } from '../../store/admin/actions';

const useVendors = () => {
  const dispatch = useDispatch();
  const stateVendors = useSelector((state) => state.adminVendors);

  const { getVendors, addVendor, getSingleVendor, addBranch } =
    bindActionCreators(vendorsCreators, dispatch);

  return {
    stateVendors,
    getVendors,
    addVendor,
    getSingleVendor,
    addBranch,
  };
};

export default useVendors;
