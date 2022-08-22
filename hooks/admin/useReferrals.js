import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { referralsCreators } from '../../store/admin/actions';

const useReferrals = () => {
  const dispatch = useDispatch();
  const stateReferrals = useSelector((state) => state.adminReferrals);

  const { getReferrals, addReferral } = bindActionCreators(
    referralsCreators,
    dispatch
  );

  return {
    stateReferrals,
    getReferrals,
    addReferral,
  };
};

export default useReferrals;
