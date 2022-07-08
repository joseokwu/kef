import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardsCreators } from '../../store/admin/actions';

const useCards = () => {
  const dispatch = useDispatch();
  const stateCards = useSelector((state) => state.adminCards);

  const { getCards } = bindActionCreators(cardsCreators, dispatch);

  return {
    stateCards,
    getCards,
  };
};

export default useCards;
