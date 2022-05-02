import { Pagination } from '@mui/material';
import React, { useState } from 'react';
import StatV2 from '../Cards/Stats-v2';
import AdminDatePicker from '../Form/AdminDatePicker';
import SearchAdmin from '../Form/searchAdmin';
import Container from '../Layout/Container';
import NavV2 from '../NavPill/V2';
import TableRaffle from './TableRaffle';

const WeeklyDetail = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [active, setActive] = useState('All users');
  const navs = [
    'All Categories',
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
  return (
    <Container>
      <section className='grid !grid-cols-[repeat(auto-fit,_minmax(28rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(28rem,_32rem))] gap-[2.6rem]'>
        <StatV2 value={'1,000'} title={'Raffle Tickets Purchased'}></StatV2>
        <StatV2 value={'300'} title={'Total Tickets Won'}></StatV2>
      </section>

      {/*  */}
      <TableRaffle datePicker={true} data={data} navs={navs} />
    </Container>
  );
};

export default WeeklyDetail;
