import React, { useState, useEffect } from 'react';
import StatV2 from '../../Cards/Stats-v2';
import Container from '../../Layout/Container';
import useShowAlert from '../../../hooks/useShowAlert';
import useLoading from '../../../hooks/useLoading';
import useOverview from '../../../hooks/admin/useOverview';
import useAuth from '../../../hooks/admin/useAuth';

const Overview = ({ link, setShow }) => {
  const [page, setPage] = useState(1);
  const [passError, setPassError] = useState('');
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();

  const {
    getOverview,
    stateOverview: {
      eventsCreated,
      raffleTicketsParticipated,
      raffleTicketsPurchased,
      raffleTicketsWon,
      rafflesCompleted,
      totalAmountSold,
      totalTicketsSold,
      totalVendorTransactions,
      vendors,
    },
  } = useOverview();
  const [active, setActive] = useState('All users');

  const { setActivePage } = useAuth();

  useEffect(() => {
    setActivePage('Overview');
    getOverview({ toggleLoad, toggleAlertBar, setPassError });
  }, []);

  return (
    <Container>
      <h4 className='text-[1.8rem] font-bold text-[#A307A8] mb-4'>
        Event Analytics
      </h4>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] gap-[2.6rem] mb-14'>
        <StatV2
          value={eventsCreated && eventsCreated}
          title={'Events Created'}
        ></StatV2>
        <StatV2
          value={totalTicketsSold && totalTicketsSold}
          title={'Total Tickets Sold'}
        ></StatV2>
        <StatV2
          value={
            totalAmountSold && `₦${totalAmountSold.toLocaleString('en-US')}`
          }
          title={'Total Amount Sold'}
        ></StatV2>
      </section>
      <h4 className='text-[1.8rem] font-bold text-[#A307A8] mb-4'>
        Raffle Analytics
      </h4>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] gap-[2.6rem] mb-14'>
        <StatV2
          value={raffleTicketsParticipated && raffleTicketsParticipated}
          title={'Raffles Created'}
        ></StatV2>
        <StatV2
          value={rafflesCompleted && rafflesCompleted}
          title={'Raffles Completed'}
        ></StatV2>
        <StatV2
          value={raffleTicketsPurchased && raffleTicketsPurchased}
          title={'Raffle Tickets Purchased'}
        ></StatV2>
        <StatV2
          value={raffleTicketsWon && raffleTicketsWon}
          title={'Raffles Tickets Won'}
        ></StatV2>
      </section>
      <h4 className='text-[1.8rem] font-bold text-[#A307A8] mb-4'>
        Vendor Analytics
      </h4>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem]'>
        <StatV2 value={vendors && vendors} title={'Vendors'}></StatV2>
        <StatV2
          value={
            totalVendorTransactions &&
            `₦${totalVendorTransactions.toLocaleString('en-US')}`
          }
          title={'Total Amount Sold'}
        ></StatV2>
        {/* <StatV2
          value={totalVendorTransactions && totalVendorTransactions}
          title={'Tickets Sold'}
        ></StatV2> */}
      </section>
    </Container>
  );
};

export default Overview;
