import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import CountDown from './Countdown';
import TableV1 from '../Tables/TableV1';
import TableRaffle from './TableRaffle';

const Event = () => {
  const navs = [
    'All Winners',
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
  ];
  const data = [
    {
      firstName: 'Jonathan',
      lastName: 'Mcreynold',
      ticketType: 'Event',
      DatePurchased: '21 March, 2022',
      amount: '500',
      phone: '+234(0)812 3456789',
      email: 'j.mcreynold@gmail.com',
    },
    {
      firstName: 'Jonathan',
      lastName: 'Smith',
      ticketType: 'Event',
      DatePurchased: '21 March, 2022',
      amount: '500',
      phone: '+234(0)812 3456789',
      email: 'jonsmith@gmail.com',
    },
  ];
  const [list, setList] = useState();
  if (!list) {
    return (
      <Wrapper1 className='main'>
        <div className='start-draw' onClick={() => setList(1)}>
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
        <TableRaffle
          datePicker={false}
          data={data}
          navs={navs}
          tableTitle={true}
        />
      </Wrapper>
    );
  }
};

export default Event;

const Wrapper = styled.main`
  .top {
    display: flex;
    gap: 5rem;
    align-items: center;

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
