import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { eventsCreators } from '../../store/admin/actions';

const useEvents = () => {
  const dispatch = useDispatch();
  const stateEvents = useSelector((state) => state.adminEvents);

  const { getSingleEvent } = bindActionCreators(eventsCreators, dispatch);

  return {
    stateEvents,
    getSingleEvent,
  };
};

export default useEvents;
