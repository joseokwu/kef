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
  }, []);

  if (events?.length <= 0) {
    return <Wrapper1>No Events Available</Wrapper1>;
  }

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

const Wrapper1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: gray;
  border: 1px solid #cecccc;
  border-radius: 20px;
  height: 50rem;
  padding: 3rem 3rem;
  box-shadow: 0px 4px 44px rgba(163, 7, 168, 0.1);
`;
