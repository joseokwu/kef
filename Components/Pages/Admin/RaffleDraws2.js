import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Automated, Event, History, Weekly } from '../../RaffleDraws';

const RaffleDraws = () => {
  const [activeNav, setActiveNav] = useState(0);
  const nav = ['Weekly Draw', 'Event Draw', 'Automated Draw', 'Draw History'];
  return (
    <Wrapper>
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
`;
