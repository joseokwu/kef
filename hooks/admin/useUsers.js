import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { usersCreators } from '../../store/admin/actions';

const useUsers = () => {
  const dispatch = useDispatch();
  const stateUsers = useSelector((state) => state.adminUsers);

  const { getUsers } = bindActionCreators(usersCreators, dispatch);

  return {
    stateUsers,
    getUsers,
  };
};

export default useUsers;
