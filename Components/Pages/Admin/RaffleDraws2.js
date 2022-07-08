import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Automated, Event, History, Weekly } from '../../RaffleDraws';
import useRaffleDraw from '../../../hooks/admin/useRaffleDraw';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';

const RaffleDraws = () => {
  const [activeNav, setActiveNav] = useState(0);

  const {
    stateRaffleDraw: { autoPage },
    setAutoPage,
  } = useRaffleDraw();

  const nav = ['Weekly Draw', 'Event Draw', 'Automated Draw', 'Draw History'];

  return (
    <Wrapper>
      {autoPage === 'cards' && (
        <div className='btn-nav'>
          {nav.map((item, index) => {
            return (
              <button
                key={index}
                className={activeNav === index && 'active'}
                onClick={() => setActiveNav(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
      {autoPage === 'weekly' && (
        <div className='secondary-nav' onClick={() => setAutoPage('cards')}>
          <Image src={'/left-arrow.svg'} width={15} height={15} alt='arrow' />
          <h3>Activate Automate Weekly Draw</h3>
        </div>
      )}
      {autoPage === 'event' && (
        <div className='secondary-nav' onClick={() => setAutoPage('cards')}>
          <Image src={'/left-arrow.svg'} width={15} height={15} alt='arrow' />
          <h3>Activate Automate Event Draw</h3>
        </div>
      )}
      {autoPage === 'weeklyDraw' && (
        <div className='secondary-nav' onClick={() => setAutoPage('cards')}>
          <Image src={'/left-arrow.svg'} width={15} height={15} alt='arrow' />
          <h3>Weekly Draw</h3>
        </div>
      )}

      {activeNav === 0 && <Weekly />}
      {activeNav === 1 && <Event />}
      {activeNav === 2 && <Automated />}
      {activeNav === 3 && <History />}
    </Wrapper>
  );
};

export default RaffleDraws;

const Wrapper = styled.section`
  .btn-nav {
    display: flex;
    gap: 4rem;
    font-size: 1.4rem;
    margin-bottom: 6rem;
    button {
      font-weight: 700;
      background: #eaeaea;
      padding: 1.25rem 1.8rem;
      box-shadow: 0px 10px 34px rgba(255, 255, 255, 0.23);
      border-radius: 10px;
    }
    .active {
      background: #fcac0d;
    }
  }

  .secondary-nav {
    font-size: 1.8rem;
    color: #a5abab;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 6rem;
    cursor: pointer;
  }
`;
