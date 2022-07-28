import React, { useState, useEffect } from 'react';
import StatV2 from '../Cards/Stats-v2';
import Container from '../Layout/Container';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import useEvents from '../../hooks/admin/useEvents';
import styled from 'styled-components';
import Image from 'next/image';
import GoBack from '../GoBack';
import { useRouter } from 'next/router';

const SingleEvent = () => {
  const [page, setPage] = useState(1);
  const [passError, setPassError] = useState('');
  const [show, setShow] = useState();
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const router = useRouter();
  const { slug } = router.query;

  const {
    getSingleEvent,
    stateEvents: { singleEvent },
  } = useEvents();
  // const [active, setActive] = useState("All users");

  useEffect(() => {
    getSingleEvent({ slug, toggleLoad, toggleAlertBar, setPassError });
  }, []);

  console.log(singleEvent);

  return (
    <Container>
      <GoBack text={'Kennis Music Fiesta'} onClick={() => router.back()} />
      <TopWrapper>
        <div className='image'>
          <img src={singleEvent?.cover} alt={'party'} />
        </div>
        <div className='info'>
          <h3>Description</h3>
          <p>{singleEvent?.description}</p>
          <div className='sub-info'>
            <div className='date'>
              <h4>Event Date</h4>
              <p>20 August, 2022</p>
            </div>
            <div className='location'>
              <h4>Venue</h4>
              <p>
                {singleEvent?.venue}, {singleEvent?.location}
              </p>
            </div>
          </div>
          <button>View More on Kudibar</button>
        </div>
      </TopWrapper>
      {/* <BtnWrapper>
        <button
          // className={link === 'DAY_ONE' ? 'active' : ''}
          onClick={() => setShow('DAY_ONE')}
        >
          Event Day 1
        </button>
        <button
          // className={link === 'DAY_TWO' ? 'active' : ''}
          onClick={() => setShow('DAY_TWO')}
        >
          Event Day 2
        </button>
      </BtnWrapper> */}
      <section className=''>
        {singleEvent?.ticketAnalysis?.map((item, index) => {
          return (
            <>
              <h4 className='text-[1.8rem] font-bold text-[#A307A8] mb-4'>
                {item?.ticketType}
              </h4>
              <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] gap-[2.6rem] mb-14'>
                <StatV2 value={item?.price} title={'Ticket Price'}></StatV2>
                <StatV2
                  value={item?.totalTicketSold}
                  title={'Total Tickets Sold'}
                ></StatV2>
                <StatV2
                  value={item?.totalTicketSales}
                  title={'Total Ticket Sales'}
                ></StatV2>
              </section>
            </>
          );
        })}
        {/* <StatV2 value={3} title={'Overall Total Sales'}></StatV2>
        <StatV2 value={3} title={'VIP Category'}></StatV2>
        <StatV2 value={3} title={'Regular Category'}></StatV2>
        <StatV2 value={3} title={'Total Sales VIP Category'}></StatV2>
        <StatV2 value={3} title={'Total Sales Regular Category'}></StatV2>
        <StatV2 value={5} title={'Purchased Tickets'}></StatV2>
        <StatV2 value={5} title={'Won Tickets'}></StatV2> */}
      </section>
    </Container>
  );
};

export default SingleEvent;

const TopWrapper = styled.section`
  display: flex;
  gap: 4rem;
  margin-bottom: 6rem;

  .image {
    width: 40%;
    border-radius: 20px;
    margin-top: auto;
    margin-bottom: auto;
    height: 35rem;
    width: 30rem;
    img {
      border-radius: 20px;
      height: 100%;
      width: 100%;
    }
    /* height: 45rem; */
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
    /* height: 35rem; */
    border: 1px solid #fde8fe;
    border-radius: 20px;
    padding: 2rem 4rem;
    background: #fcf9fc;
    /* box-shadow: 5px 10px #fcf9fc; */
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 4rem;
    }
    .sub-info {
      display: flex;
      gap: 6rem;
      margin-bottom: 4rem;
      h4 {
        font-size: 14px;
        font-weight: 700;
        color: #000000;
      }
      p {
        font-size: 16px;
        font-weight: 600;
        color: #717171;
      }
    }
    button {
      width: 50%;
      border: 1px solid #c6155f;
      border-radius: 10px;
      padding: 1rem 2rem;
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

const BtnWrapper = styled.div`
  font-size: 1.8rem;
  color: #a5abab;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;

  .active {
    background: linear-gradient(to left, #a608a3, #c6155f, #d82023);
    color: white;
  }

  button {
    padding: 12px 20px 12px 20px;
    border-radius: 10px;
    font-weight: 600;
    background: #eaeaea;
    color: black;
  }
`;
