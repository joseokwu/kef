import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import CountDown from './Countdown';
import TableV1 from '../Tables/TableV1';

const Weekly = () => {
  const [list, setList] = useState(1);
  if (!list) {
    return (
      <Wrapper1 className='main'>
        <div className='start-draw'>
          <Image
            src={'/start-draw-red.svg'}
            alt='start draw'
            width={200}
            height={200}
          />
        </div>
      </Wrapper1>
    );
  } else {
    return (
      <Wrapper>
        <div className='top'>
          <div className='top-left'>
            <div className='top-text'>
              <h3>Week 1 Draw</h3>
              <p>The next raffle draw will happen on 20 April, 2022. </p>
            </div>
            <div className='timer'>
              <CountDown />
            </div>
          </div>
          <div className='start-draw2'>
            <Image
              src={'/start-draw-grey.svg'}
              alt='start draw'
              width={150}
              height={150}
            />
          </div>
        </div>
        <TableV1 />
      </Wrapper>
    );
  }
};

export default Weekly;

const Wrapper = styled.main`
  .top {
    display: flex;
    gap: 5rem;
    align-items: center;
    margin-top: 6rem;

    .start-draw2 {
      cursor: pointer;
    }
    .start-draw2:active {
      transform: translateY(4px);
    }

    .top-left {
      display: flex;
      align-items: center;
      background: #f0f0f0;
      border-radius: 20px;
      width: 60%;
      padding: 2rem;
      h3 {
        font-size: 1.8rem;
        font-weight: 700;
      }
      p {
        font-size: 1.4rem;
        width: 70%;
      }
      .timer {
        /* width: 30%; */
      }
    }
  }
`;

const Wrapper1 = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  margin-top: 5rem;
  border-radius: 20px;
  background: #f5f4f4;
  .start-draw {
    cursor: pointer;
  }
  .start-draw:active {
    transform: translateY(4px);
  }
`;
