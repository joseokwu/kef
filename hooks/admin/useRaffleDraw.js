import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { raffleDrawCreators } from '../../store/admin/actions';

const useRaffleDraw = () => {
  const dispatch = useDispatch();
  const stateRaffleDraw = useSelector((state) => state.adminRaffleDraw);

  const {
    setAutoPage,
    toggleFullScreen,
    createCampaign,
    getRaffleDraw,
    getActiveDraws,
    getProgressiveDrawDetails,
    startProgressiveDraw,
    stopProgressiveDraw,
    createWeeklyCampaign,
  } = bindActionCreators(raffleDrawCreators, dispatch);

  return {
    stateRaffleDraw,
    setAutoPage,
    toggleFullScreen,
    createCampaign,
    getRaffleDraw,
    getActiveDraws,
    getProgressiveDrawDetails,
    startProgressiveDraw,
    stopProgressiveDraw,
    createWeeklyCampaign,
  };
};

export default useRaffleDraw;
