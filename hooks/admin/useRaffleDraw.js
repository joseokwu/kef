import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { raffleDrawCreators } from '../../store/admin/actions';

const useRaffleDraw = () => {
  const dispatch = useDispatch();
  const stateRaffleDraw = useSelector((state) => state.adminRaffleDraw);

  const {
    setAutoPage,
    getAutomatedDraw,
    activateWeeklyDrawSettings,
    getWeeklyDrawSettings,
    getWeeklyDraw,
    updateWeeklyDrawSettings,
    checkWeeklyDrawBtn,
    activateEventDrawSettings,
    getEventDrawSettings,
    getEventDraw,
    updateEventDrawSettings,
    checkEventDrawBtn,
  } = bindActionCreators(raffleDrawCreators, dispatch);

  return {
    stateRaffleDraw,
    setAutoPage,
    getAutomatedDraw,
    activateWeeklyDrawSettings,
    getWeeklyDrawSettings,
    getWeeklyDraw,
    updateWeeklyDrawSettings,
    checkWeeklyDrawBtn,
    activateEventDrawSettings,
    getEventDrawSettings,
    getEventDraw,
    updateEventDrawSettings,
    checkEventDrawBtn,
  };
};

export default useRaffleDraw;
