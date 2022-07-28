import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { eventsCreators } from '../../store/admin/actions';

const useEvents = () => {
  const dispatch = useDispatch();
  const stateEvents = useSelector((state) => state.adminEvents);

  const { getSingleEvent, getEvents } = bindActionCreators(
    eventsCreators,
    dispatch
  );

  return {
    stateEvents,
    getSingleEvent,
    getEvents,
  };
};

export default useEvents;
