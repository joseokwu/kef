import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCreators } from '../../store/admin/actions';

const useAuth = () => {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.adminAuth);

  const { login } = bindActionCreators(authCreators, dispatch);

  return {
    stateAuth,
    login,
  };
};

export default useAuth;
