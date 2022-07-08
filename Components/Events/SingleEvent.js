import React, { useState, useEffect } from 'react';
import StatV2 from '../Cards/Stats-v2';
import Container from '../Layout/Container';
import Pagination from '@mui/material/Pagination';
import NavV1 from '../NavPill/V1';
import SearchAdmin from '../Form/searchAdmin';
import AdminDatePicker from '../Form/AdminDatePicker';
import useShowAlert from '../../hooks/useShowAlert';
import useLoading from '../../hooks/useLoading';
import useEvents from '../../hooks/admin/useEvents';
import Image from 'next/image';

const SingleEvent = ({ link, setShow }) => {
  const [page, setPage] = useState(1);
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();

  const {
    getSingleEvent,
    stateEvents: {
      overallTotalSales,
      vipCategory,
      regularCategory,
      totalSalesVip,
      totalSalesRegular,
      purchasedTickets,
      wonTickets,
    },
  } = useEvents();
  // const [active, setActive] = useState("All users");

  useEffect(() => {
    getSingleEvent({ link, toggleLoad, toggleAlertBar, setPassError });
  }, []);

  console.log(
    overallTotalSales,
    vipCategory,
    regularCategory,
    totalSalesVip,
    totalSalesRegular,
    purchasedTickets,
    wonTickets
  );

  // console.log(
  //   totalSales,
  //   eventTickets,
  //   raffleTickets,
  //   progressiveToken,
  //   liveSession,
  //   transactions
  // );
  return (
    <Container>
      <div
        className='secondary-nav'
        style={{
          fontSize: '1.8rem',
          color: '#a5abab',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '6rem',
          cursor: 'pointer',
        }}
        onClick={() => setShow('base')}
      >
        <Image src={'/left-arrow.svg'} width={15} height={15} alt='arrow' />
        <h3>
          {link === 'DAY_ONE' ? 'Kennis Event Day 1' : 'Kennis Event Day Two'}
        </h3>
      </div>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] gap-[2.6rem]'>
        <StatV2
          value={overallTotalSales && overallTotalSales}
          title={'Overall Total Sales'}
        ></StatV2>
        <StatV2
          value={vipCategory && vipCategory}
          title={'VIP Category'}
        ></StatV2>
        <StatV2
          value={regularCategory && regularCategory}
          title={'Regular Category'}
        ></StatV2>
        <StatV2
          value={totalSalesVip && totalSalesVip}
          title={'Total Sales VIP Category'}
        ></StatV2>
        <StatV2
          value={totalSalesRegular && totalSalesRegular}
          title={'Total Sales Regular Category'}
        ></StatV2>
        <StatV2
          value={purchasedTickets && purchasedTickets}
          title={'Purchased Tickets'}
        ></StatV2>
        <StatV2 value={wonTickets && wonTickets} title={'Won Tickets'}></StatV2>
      </section>
    </Container>
  );
};

export default SingleEvent;
