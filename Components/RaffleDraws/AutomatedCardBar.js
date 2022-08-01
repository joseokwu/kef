import React, { useState, useEffect } from 'react';
import AutomatedCard from './AutomatedCard';
import styled from 'styled-components';
import useRaffleDraw from '../../hooks/admin/useRaffleDraw';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';

const AutomatedCardBar = () => {
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();

  const {
    stateRaffleDraw: {
      automatedDrawSettings: { weeklySetting, eventSetting },
    },
    setAutoPage,
    getAutomatedDraw,
    activateWeeklyDrawSettings,
    activateEventDrawSettings,
  } = useRaffleDraw();

  const data = [
    {
      title: 'Automate Weekly Draw',
      description: 'Automate how weekly draws work',
      action: 'Edit Process',
      nav: 'weekly',
    },
    {
      title: 'Automate Event Draw',
      description: 'Automate how event draws work',
      action: 'Activate Automation',
      nav: 'event',
    },
  ];

  const activateWeeklySettings = (value) => {
    activateWeeklyDrawSettings({
      toggleAlertBar,
      toggleLoad,
      setPassError,
      activated: value,
    });
  };

  const activateEventSettings = (value) => {
    activateEventDrawSettings({
      toggleAlertBar,
      toggleLoad,
      setPassError,
      activated: value,
    });
  };

  console.log(weeklySetting);

  useEffect(() => {
    getAutomatedDraw({ setPassError, toggleAlertBar, toggleLoad });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {/* {data.map((item, index) => {
        return (
          <AutomatedCard
            onClick={() => setAutoPage(item.nav)}
            key={index}
            title={item.title}
            description={item.description}
            actionBtn={item.action}
            action={item.nav === 'weekly' ? weeklySetting : eventSetting}
          />
        );
      })} */}
      <AutomatedCard
        onClick={() => setAutoPage('weekly')}
        title={'Automate Weekly Draw'}
        description={'Automate how weekly draws work'}
        actionBtn={'Edit Process'}
        action={weeklySetting}
        activateSettings={activateWeeklySettings}
      />
      <AutomatedCard
        AutomatedCard
        onClick={() => setAutoPage('event')}
        title={'Automate Event Draw'}
        description={'Automate how event draws work'}
        actionBtn={'Activate Automation'}
        action={eventSetting}
        activateSettings={activateEventSettings}
      />
    </Wrapper>
  );
};

export default AutomatedCardBar;

const Wrapper = styled.section`
  display: flex;
  gap: 4rem;
`;
