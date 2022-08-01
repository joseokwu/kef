import React, { useState, useEffect } from 'react';
import PoweredBy2 from '../../Cards/PoweredBy2';
import useEvents from '../../../hooks/admin/useEvents';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';
import useAuth from '../../../hooks/admin/useAuth';
import styled from 'styled-components';

const Events = () => {
  const [show, setShow] = useState('base');
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const { setActivePage } = useAuth();
  const {
    getEvents,
    stateEvents: { events },
  } = useEvents();

  useEffect(() => {
    setActivePage('Events');
    getEvents({ toggleLoad, toggleAlertBar, setPassError });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper className=''>
      {events?.map((event, index) => {
        return (
          <PoweredBy2
            key={index}
            event={event}
            // title={'Kennis Music Easter Fiesta, 2022'}
            bgImg={'bg-party'}
          />
        );
      })}
    </Wrapper>
  );
};

export default Events;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
