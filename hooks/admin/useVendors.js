import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { vendorsCreators } from '../../store/admin/actions';

const useVendors = () => {
  const dispatch = useDispatch();
  const stateVendors = useSelector((state) => state.adminVendors);

  const { getVendors, addVendor } = bindActionCreators(
    vendorsCreators,
    dispatch
  );

  return {
    stateVendors,
    getVendors,
    addVendor,
  };
};

export default useVendors;
