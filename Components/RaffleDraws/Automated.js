import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import CountDown from './Countdown';
import AutomatedCardBar from './AutomatedCardBar';
import AutomateEventBar from './AutomateEventBar';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';

const Automated = () => {
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const {
    stateRaffleDraw: { autoPage, weeklyDrawSettings, eventDrawSettings },
    getWeeklyDrawSettings,
    getEventDrawSettings,
  } = useRaffleDraw();

  useEffect(() => {
    getWeeklyDrawSettings({ toggleAlertBar, toggleLoad, setPassError });
    getEventDrawSettings({ toggleAlertBar, toggleLoad, setPassError });
  }, []);

  return (
    <>
      {autoPage === 'cards' && <AutomatedCardBar />}
      {/* {autoPage === 'weekly' && (
        // <AutomateWeeklyBar weeklyDrawSettings={weeklyDrawSettings} />
      )} */}
      {autoPage === 'event' && (
        <AutomateEventBar eventDrawSettings={eventDrawSettings} />
      )}
    </>
  );
};
export default Automated;
