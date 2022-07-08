import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { transactionsCreators } from '../../store/admin/actions';

const useTransactions = () => {
  const dispatch = useDispatch();
  const stateTransactions = useSelector((state) => state.adminTransactions);

  const { getTransactions } = bindActionCreators(
    transactionsCreators,
    dispatch
  );

  return {
    stateTransactions,
    getTransactions,
  };
};

export default useTransactions;
